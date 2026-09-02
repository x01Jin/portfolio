import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  delay?: number;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  id,
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="relative"
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection;
