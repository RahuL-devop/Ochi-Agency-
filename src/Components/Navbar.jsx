import React, { useEffect, useState } from "react";
import Logo from "../assets/Loogo";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import Menu from "./partials/Menu";

const navLinks = [
  "Services",
  "Our Work",
  "About us ",
  "Insights",
  "Contact us",
];

const Navbar = ({ open, setOpen }) => {
  console.log("open in Navbar:", open);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

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
      console.log("hidden");
    } else {
      console.log("nnothidden");
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
        className="sticky top-0 flex items-center justify-between w-full h-full px-4 py-2 Navbar backdrop-blur-sm md:px-12 md:py-4"
      >
        <Logo />
        {/* <Menu className="Hamburgur" onClick={() => toogleMenu()} /> */}
        <RiMenu3Fill
          className="menu cursor-pointer text-[6.5vw]"
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
        <AnimatePresence>
          {open && (
            <motion.div
              variants={{
                start: {
                  scaleY: 0,
                },
                middle: {
                  scaleY: 1,
                  duration: 0.5,
                  ease: [0.12, 0, 0.39, 0],
                },
                end: {
                  scaleY: 0,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              initial="start"
              animate="middle"
              exit="end"
              className="mobileNav fixed left-0 top-0 z-50 flex min-h-[100vh] w-full origin-top flex-col items-center justify-center gap-12 bg-[#5d5e5b] p-10"
            >
              {open && (
                <TfiClose
                  onClick={() => toogleMenu()}
                  className="absolute right-0 top-0 mr-4 mt-4 text-[6.5vw]"
                />
              )}
              {navLinks.map((item, index) => {
                return (
                  <div className="mobNav_links ">
                    <motion.div
                      variants={{
                        initial: { y: "30vh", transition: {} },
                        open: { y: 0 },
                      }}
                      initial="initial"
                      animate="open"
                      className="navlink text-[8vw]"
                      key={index}
                    >
                      <div className="overflow-y-hidden">{item}</div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
