import { writeFile } from "node:fs/promises";

const ENDPOINT =
  "https://api.github.com/users/x01Jin/repos?per_page=100&type=owner";
const TARGET = new URL("../stars.json", import.meta.url);

const response = await fetch(ENDPOINT, {
  headers: {
    Accept: "application/vnd.github+json",
    "User-Agent": "x01jin-portfolio-build",
  },
});

if (!response.ok) {
  console.warn(
    `Keeping bundled star counts: GitHub API answered ${response.status}`
  );
  process.exit(0);
}

const repos = await response.json();
const owned = repos.filter((repo) => !repo.fork);

const payload = {
  generatedAt: new Date().toISOString(),
  totalStars: owned.reduce((sum, repo) => sum + repo.stargazers_count, 0),
  repos: Object.fromEntries(
    owned.map((repo) => [repo.name, repo.stargazers_count])
  ),
};

await writeFile(TARGET, `${JSON.stringify(payload, null, 2)}\n`);
console.log(
  `Stars refreshed: ${payload.totalStars} across ${owned.length} repositories`
);
