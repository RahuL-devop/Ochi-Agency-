import React from "react";

const Cards = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen gap-5 px-2 bg-zinc-100 md:flex-row md:px-12">
        <div className="Card_container h-[60vh] w-full md:w-1/2 ">
          <div className="Card relative flex h-full w-full items-center justify-center rounded-lg bg-[#004D43]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />

            <button className="absolute bottom-8 left-8 rounded-full border-[2px] border-[#AACE61] px-3 text-sm text-[#AACE61]">
              ©2019-2022
            </button>
          </div>
        </div>

        <div className="Card_container flex h-[60vh] w-full gap-5 md:w-1/2">
          <div className="Card relative flex h-full w-1/2 items-center justify-center rounded-lg bg-[#212121]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="absolute bottom-8 left-10 rounded-full border-[2px] border-zinc-200 px-3 py-1 text-[2vw] text-zinc-200 md:text-sm">
              Rating 5.0 on Clutch
            </button>
          </div>
          <div className="Card relative flex h-full w-1/2 items-center justify-center rounded-lg bg-[#212121]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button
              className="absolute bottom-8 left-10 rounded-full border-[2px] border-zinc-200 px-4 
            text-[2vw] capitalize text-zinc-200 md:w-[15vw] md:text-sm"
            >
              Bussinuss Bootcamp alumini
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
