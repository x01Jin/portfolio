import React from "react";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ id, children, delay = 0 }) => {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -12% 0px",
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id={id}
      data-reveal
      className={`section ${inView ? "revealed" : ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      <div className="shell">{children}</div>
    </section>
  );
};

export default Section;
