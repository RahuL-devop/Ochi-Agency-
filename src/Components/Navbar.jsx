import React, { useEffect, useState } from "react";
import Logo from "../assets/Loogo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const preiousValue = scrollY.getPrevious();
    // console.log("latestValue :-", latestValue, "preiousValue:-", preiousValue);
    if (latestValue > preiousValue) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <>
      <Logo />
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="Navbar sticky top-0 z-[9999] flex w-full flex-col items-center justify-between px-12 py-4 backdrop-blur-sm "
      >
        <motion.div className="flex gap-8 overflow-hidden">
          {["Services", "Our Work", "About us ", "Insights", "Contact us"].map(
            (e, i) => (
              <motion.a
                className={`Nav__link neue cursor-pointer text-[16px] font-light leading-[12px] ${i === 4 && "ml-[12rem]"}`}
                key={i}
              >
                {e}
              </motion.a>
            ),
          )}
        </motion.div>
        <motion.div className="flex gap-8 overflow-hidden">
          {["Services", "Our Work", "About us ", "Insights", "Contact us"].map(
            (e, i) => (
              <motion.a
                className={`Nav__link neue cursor-pointer text-[16px] font-light leading-[12px] ${i === 4 && "ml-[12rem]"} text-red-500`}
                key={i}
              >
                {e}
              </motion.a>
            ),
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
