import React, { useEffect, useState } from "react";
import Logo from "../assets/Loogo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

// import Menu from "./Menu";
const Navbar = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (lat) => console.log(lat));

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden " : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="Navbar sticky top-0 z-[9999] flex w-full items-center justify-between px-12 py-4"
      >
        <Logo />
        <div className="flex gap-6">
          {["Services", "Our Work", "About us ", "Insights", "Contact us"].map(
            (e, i) => (
              <a
                className={`neue cursor-pointer text-[16px] font-light leading-[12px] ${i === 4 && "ml-[12rem]"}`}
                key={i}
              >
                {e}
              </a>
            ),
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
