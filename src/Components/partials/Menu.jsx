import { motion, MotionConfig } from "framer-motion";
import React, { useState } from "react";

const AnimatedHam = () => {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive((pev) => !pev)}
        className="relative w-10 h-10 transition-colors border-none rounded-full outline-none"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            top: "35%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className=" first absolute h-[1px] w-[25px] bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },

            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="second absolute h-[1px] w-[25px] bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },

            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default AnimatedHam;
