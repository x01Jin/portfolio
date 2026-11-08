import React from "react";
import Section from "./Section";
import { SOCIAL_LINKS } from "../constants";
import {
  DiscordIcon,
  FacebookIcon,
  GitHubIcon,
  MailIcon,
} from "./Icons";

const LINKS = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: GitHubIcon },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: FacebookIcon },
  { label: "Discord", href: SOCIAL_LINKS.discord, icon: DiscordIcon },
];

const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <div className="plate tape p-7 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">04 / Contact</p>
            <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.1rem)] text-ink">
              Get in touch
            </h2>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="btn btn-primary mt-6 break-all normal-case tracking-normal"
            >
              <MailIcon className="h-5 w-5 shrink-0" />
              {SOCIAL_LINKS.email}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 md:w-[288px]">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 border-2 border-ink bg-paper px-2 py-3 text-ink transition-transform hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium text-ink-soft">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
