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
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="Navbar sticky top-0 z-[9999] flex  w-full  items-center justify-between overflow-hidden  px-12  py-4 backdrop-blur-sm"
      >
        <Logo />
        <motion.div
          className=" flex gap-8   
        
        
        "
        >
          {["Services", "Our Work", "About us ", "Insights", "Contact us"].map(
            (e, i) => (
              <>
                <motion.div key={i} className="relative">
                  <motion.a
                    className={`  Nav__linkk neue relative block cursor-pointer text-[16px] font-light leading-[12px] ${i === 4 && "ml-[12rem]"}`}
                    key={i}
                    whileHover={{
                      translateY: "20px",
                    }}
                  >
                    {e}
                  </motion.a>

                  <motion.a
                    className={` Nav__link neue absolute top-0  translate-y-[125%] cursor-pointer text-[16px] font-light leading-[12px] text-red-500 ${i === 4 && "ml-[12rem]"}`}
                    key={i}
                    animate={{ translateY: hidden ? 0 : "-125%" }}
                  >
                    {e}
                  </motion.a>
                </motion.div>
              </>
            ),
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
