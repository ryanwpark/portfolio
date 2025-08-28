import { motion, useScroll } from "motion/react";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return (
    <header
      style={{
        position: "fixed",
        top: 0, // vertical padding from top
        left: 20, // horizontal padding from left edge
        right: 20, // horizontal padding from right edge
        pointerEvents: "none",
      }}
    >
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
          width: "100%",
          height: 6,
          backgroundColor: "#84add5ff",
          borderRadius: 9999,
        }}
      />
    </header>
  );
};

export default ScrollProgress;
