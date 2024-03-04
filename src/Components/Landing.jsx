import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
const Landing = () => {
  return (
    <>
      <div
        // data-scroll
        // data-scrol-section
        // data-scroll-speed="-0.3"
        className="min-h-[100vh] w-full bg-zinc-900 py-[1px]"
      >
        <div className=" textStructure mt-10 px-4 md:mt-[10.5rem] md:px-12">
          {["We create", "eye-opening", "Presentations"].map((e, i) => {
            return (
              <div key={i} className="overflow-hidden masker">
                <div className="flex items-end w-fit">
                  {i === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "13vw" }}
                      transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
                      className="relative -top-[1.23vw] mr-[0.5vw] h-[11.5vw] w-[12vw]  rounded-xl bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center  md:h-[6.5vw]"
                    ></motion.div>
                  )}
                  <h1
                    key={i}
                    className="-mb-[3vw] font-['Founders_Grotesk_X'] text-[15vw] font-[600] uppercase leading-[1.05] md:text-[10.5vw]"
                  >
                    {e}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="thin_line mt-5 flex flex-col items-center justify-between border-t-[1px] border-zinc-800 px-12 py-4 md:mt-[4rem] md:flex-row">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((e, i) => {
            return (
              <p
                key={i}
                className="mt-5 font-light leading-none tracking-tight text-md"
              >
                {e}
              </p>
            );
          })}
          <div className="flex items-center justify-center gap-2 mt-5 start">
            <div className="rounded-full border-[2px] border-zinc-500 px-5 py-1 text-sm font-light uppercase">
              start the Project
            </div>
            <div className="round flex h-5 w-5  items-center justify-center rounded-full border-[2px] border-zinc-600 p-4 text-sm">
              <span className="rotate-[45deg]">
                <FaLongArrowAltUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
