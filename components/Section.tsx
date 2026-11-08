import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export const revealDelay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export const useReveal = () => {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: true,
  });
  const [painted, setPainted] = useState(false);

  useEffect(() => {
    let inner = 0;
    const outer = window.requestAnimationFrame(() => {
      inner = window.requestAnimationFrame(() => setPainted(true));
    });
    return () => {
      window.cancelAnimationFrame(outer);
      window.cancelAnimationFrame(inner);
    };
  }, []);

  return { ref, revealed: painted && inView };
};

const Section: React.FC<SectionProps> = ({ id, children }) => {
  const { ref, revealed } = useReveal();

  return (
    <section
      ref={ref}
      id={id}
      className={`section ${revealed ? "revealed" : ""}`}
    >
      <div className="shell">{children}</div>
    </section>
  );
};

export default Section;
