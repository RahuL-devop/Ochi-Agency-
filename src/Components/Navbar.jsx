import React, { useEffect, useState } from "react";
import Logo from "../assets/Loogo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// import { RiMenu3Fill } from "react-icons/ri";
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
        <Menu className="Hamburgur" onClick={() => toogleMenu()} />
        {open && <TfiClose />}
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
            <div className="mobileNav fixed left-0 top-0 min-h-[100vh] w-full bg-red-500 p-10">
              {navLinks.map((item, index) => {
                return (
                  <>
                    <div key={index}>{item}</div>
                  </>
                );
              })}
            </div>
          )
        }
      </motion.div>
    </>
  );
};

export default Navbar;
