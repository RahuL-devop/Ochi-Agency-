import React from "react";

const Cards = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center gap-5 bg-zinc-100 px-12">
        <div className="Card_container h-[60vh] w-1/2  ">
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

        <div className="Card_container flex h-[60vh] w-1/2 gap-5">
          <div className="Card relative flex h-full w-1/2 items-center justify-center rounded-lg bg-[#212121]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="absolute bottom-8 left-10 rounded-full border-[2px] border-zinc-200 px-3 py-1 text-sm text-zinc-200">
              Rating 5.0 on Clutch
            </button>
          </div>
          <div className="Card relative flex h-full w-1/2 items-center justify-center rounded-lg bg-[#212121]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button className="absolute bottom-8 left-10 w-[15vw] rounded-full border-[2px] border-zinc-200 px-4 text-sm capitalize text-zinc-200">
              Bussinuss Bootcamp alumini
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
