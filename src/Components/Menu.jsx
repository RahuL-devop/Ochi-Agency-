import { easeInOut, motion, MotionConfig } from "framer-motion";
import React, { useState } from "react";

const Menu = () => {
  const [active, setactive] = useState(false);

  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: easeInOut,
        }}
      >
        <div className="p-[0.1px] ">
          <motion.button
            onClick={() => {
              setactive((pre) => !pre);
            }}
            animate={active ? "open" : "closed"}
            className="relative flex h-20 w-20 cursor-pointer items-center rounded-full"
          >
            <motion.span
              className="absolute h-[2px] w-10 bg-white "
              style={{
                top: "40%",
                left: "50%",
                x: "-50%",
                y: "50%",
              }}
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["45%", "50%", "50%"],
                },
                closed: {
                  rotate: ["45deg", "0deg", "0deg"],
                  bottom: ["50%", "50%", "45%"],
                },
              }}
            ></motion.span>
            <motion.span
              style={{
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
              }}
              className="absolute h-[2px] w-10 bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                },
                closed: {
                  rotate: ["-45deg", "0deg", "0deg"],
                },
              }}
            ></motion.span>
          </motion.button>
        </div>
      </MotionConfig>
    </>
  );
};

export default Menu;
