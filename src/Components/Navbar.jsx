import React, { useEffect, useState } from "react";
import Logo from "../assets/Loogo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// import { RiMenu3Fill } from "react-icons/ri";
import Menu from "./partials/Menu";

const navLinks = [
  "Services",
  "Our Work",
  "About us ",
  "Insights",
  "Contact us",
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const [open, setOpen] = useState(false);

  const toogleMenu = () => {
    setOpen((prev) => !prev);
    if (open) {
      console.log("close");
    } else {
      console.log("open");
    }
  };

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
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 flex justify-between w-full px-4 py-2 overflow-hidden itefirst-line:ms-center Navbar backdrop-blur-sm md:px-12 md:py-4"
      >
        <Logo />
        <Menu
          className="Hamburgur z-[9999] block cursor-pointer text-[6vw] sm:hidden"
          onClick={() => toogleMenu()}
        />
        <motion.div className="hidden gap-8 lg:flex">
          {navLinks.map((e, i) => (
            <>
              <motion.div key={i} className="relative">
                <motion.a
                  className={`Nav__link neue relative block cursor-pointer text-[16px] font-light leading-[12px] ${i === 4 && "ml-[12rem]"}`}
                  key={i}
                >
                  {e}
                </motion.a>{" "}
              </motion.div>
            </>
          ))}
        </motion.div>

        {
          /* Mobile View */
          open && (
            <div className="fixed top-0 left-0 w-full h-screen bg-red-500 mobileNav"></div>
          )
        }
      </motion.div>
    </>
  );
};

export default Navbar;
