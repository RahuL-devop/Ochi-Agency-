import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.19"
      className="w-full rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] py-20 text-black"
    >
      <h1 className="px-12 font-['Neue_Montreal'] text-[4vw] leading-none tracking-[1px] text-black">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      <div className="mt-20 w-full border-t-[1px] border-[#939f6e]"></div>
      <div className="first-line: flex w-full justify-between px-12 py-5 font-['Neue_Montreal'] font-[400] text-[#494F31]">
        <p className="w-[35%] ">What you can expect: </p>
        <div className="w-[25%]">
          <p className="">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="mt-10">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>

        <p className="mt-20 w-[15%]">
          S:
          {["Instagram", "Behance", "Facebook", "Linkedin"].map((e, i) => {
            return (
              <a
                className="-m-[0.4vw] flex w-fit flex-col border-b-[2px] border-[#494F31]"
                key={i}
              >
                {e}
              </a>
            );
          })}
        </p>
      </div>
      <div className="mt-[6vw] w-full border-t-[1px] border-[#939f6e]"></div>
      <div className="Approch flex gap-[20vw] px-12 py-5">
        <div className="w-1/2">
          <h1 className='font-["Neue_Montreal"] text-[4vw] font-[500] text-[#212121]'>
            Our approach:
          </h1>
          <button className="mb-5 mt-5 flex items-center gap-5 rounded-full bg-black px-8 py-2 font-[400] capitalize text-[#EDEDED]">
            Read more
            <span className="block h-2 w-2 rounded-full bg-white"></span>
          </button>
        </div>
        <div className="h-[50vh] w-1/2 rounded-3xl bg-[#608a4f]"></div>
      </div>
    </div>
  );
};

export default About;
