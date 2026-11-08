import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const GitHubIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17a4.65 4.65 0 0 1 1.23 3.22c0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 3C6.48 3 2 6.9 2 11.7c0 2.74 1.46 5.2 3.75 6.83V22l3.2-1.76c.97.27 1.99.41 3.05.41 5.52 0 10-3.9 10-8.95S17.52 3 12 3Zm-1.03 11.58-2.6-2.77-5.08 2.77 5.59-5.94 2.66 2.77 5.02-2.77-5.59 5.94Z" />
  </svg>
);

export const DiscordIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M19.54 4.42A16.7 16.7 0 0 0 15.4 3.1l-.5 1.02a15.6 15.6 0 0 0-5.8 0L8.6 3.1a16.7 16.7 0 0 0-4.14 1.32C1.84 8.37 1.13 12.22 1.49 16.02a16.7 16.7 0 0 0 5.1 2.59l1.24-1.69c-.68-.25-1.33-.56-1.93-.92l.47-.36a11.9 11.9 0 0 0 11.26 0l.47.36c-.6.36-1.25.67-1.93.92l1.24 1.69a16.7 16.7 0 0 0 5.1-2.59c.43-4.41-.73-8.22-2.97-11.6ZM8.64 14.03c-1.1 0-2-.99-2-2.2s.88-2.2 2-2.2c1.13 0 2.02.99 2 2.2 0 1.21-.88 2.2-2 2.2Zm6.72 0c-1.1 0-2-.99-2-2.2s.88-2.2 2-2.2c1.13 0 2.02.99 2 2.2 0 1.21-.88 2.2-2 2.2Z" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 2.6l2.96 6.02 6.64.96-4.8 4.7 1.13 6.62L12 17.77 6.07 20.9l1.13-6.62-4.8-4.7 6.64-.96L12 2.6Z" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
