import { useSyncExternalStore } from "react";
import snapshot from "./stars.json";

export interface StarData {
  total: number;
  repos: Record<string, number>;
}

interface Repo {
  name: string;
  stargazers_count: number;
  fork: boolean;
}

interface Cache {
  savedAt: number;
  data: StarData;
}

const ENDPOINT =
  "https://api.github.com/users/x01Jin/repos?per_page=100&type=owner";
const CACHE_KEY = "x01jin-stars";
const CACHE_TTL = 15 * 60 * 1000;

const FALLBACK: StarData = {
  total: snapshot.totalStars,
  repos: snapshot.repos,
};

const listeners = new Set<() => void>();

let store: StarData | null = null;
let storedAt = 0;
let pending: Promise<void> | null = null;

const isStarData = (value: unknown): value is StarData => {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Partial<StarData>;
  return (
    typeof candidate.total === "number" &&
    typeof candidate.repos === "object" &&
    candidate.repos !== null
  );
};

const readCache = (): Cache | null => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cache = JSON.parse(raw) as Partial<Cache>;
    if (typeof cache.savedAt !== "number" || !isStarData(cache.data)) return null;
    return cache as Cache;
  } catch (error) {
    console.warn("Ignoring unreadable star cache", error);
    return null;
  }
};

const writeCache = (data: StarData, savedAt: number) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt, data }));
  } catch (error) {
    console.warn("Could not cache star counts", error);
  }
};

const toStarData = (repos: Repo[]): StarData => {
  const owned = repos.filter((repo) => !repo.fork);
  return {
    total: owned.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    repos: Object.fromEntries(
      owned.map((repo) => [repo.name, repo.stargazers_count])
    ),
  };
};

const apply = (data: StarData, savedAt: number) => {
  store = data;
  storedAt = savedAt;
  listeners.forEach((listener) => listener());
};

const refresh = (): Promise<void> => {
  if (pending) return pending;
  if (storedAt > 0 && Date.now() - storedAt < CACHE_TTL) {
    return Promise.resolve();
  }

  pending = fetch(ENDPOINT, {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`GitHub API answered ${response.status}`);
      }
      return response.json() as Promise<Repo[]>;
    })
    .then((repos) => {
      const next = toStarData(repos);
      const savedAt = Date.now();
      writeCache(next, savedAt);
      apply(next, savedAt);
    })
    .catch((error: unknown) => {
      console.warn("Keeping bundled star counts", error);
    })
    .finally(() => {
      pending = null;
    });

  return pending;
};

const getSnapshot = (): StarData => {
  if (store) return store;

  const cache = readCache();
  if (cache) {
    store = cache.data;
    storedAt = cache.savedAt;
    return store;
  }

  store = FALLBACK;
  return store;
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  void refresh();
  return () => {
    listeners.delete(listener);
  };
};

export const useStars = (): StarData =>
  useSyncExternalStore(subscribe, getSnapshot, () => FALLBACK);
