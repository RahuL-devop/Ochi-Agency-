import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div
        data-scroll
        data-scrol-section
        data-scroll-speed=".20"
        className="w-full rounded-tl-3xl rounded-tr-3xl bg-[#004D43] py-20"
      >
        <div className="flex overflow-hidden whitespace-nowrap border-b-2 border-t-2   border-zinc-800 ">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="-mb-[3vw] pr-10 pt-[5vw] font-['Founders_Grotesk_X'] text-[20vw] font-[600] uppercase leading-none"
          >
            We are Ochi &nbsp;
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="-mb-[3vw] pr-10 pt-[5vw] font-['Founders_Grotesk_X'] text-[20vw] font-[600] uppercase leading-none"
          >
            We are Ochi &nbsp;
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="-mb-[3vw] pr-10 pt-[5vw] font-['Founders_Grotesk_X'] text-[20vw] font-[600] uppercase leading-none"
          >
            We are Ochi &nbsp;
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="-mb-[3vw] pr-10 pt-[5vw] font-['Founders_Grotesk_X'] text-[20vw] font-[600] uppercase leading-none"
          >
            We are Ochi &nbsp;
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marquee;
