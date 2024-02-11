import React from "react";

const Featured = () => {
  return (
    <>
      <div className="w-full py-28 ">
        <div className="w-full">
          <h1 className="px-12 font-['Neue_Montreal'] text-6xl text-white">
            Featured projects{" "}
          </h1>
        </div>
        <div className="mt-10 w-full border-b-[1px] bg-zinc-600"></div>
        <div className="px-12">
          <div className="Cards mt-10 flex w-full gap-10">
            <div className="Card_Container relative h-[80vh] w-1/2 ">
              <h1 className="absolute left-full top-1/2 z-[9] -translate-x-1/2 -translate-y-1/2 text-5xl text-[#cdea68] ">
                {"FYND".split("").map((e, i) => {
                  return <span key={i}>{e}</span>;
                })}
              </h1>
              <div className=" Card h-full w-full overflow-hidden rounded-xl  ">
                <img
                  className="h-full w-full overflow-hidden bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
            </div>
            <div className="Card_Container relative h-[80vh] w-1/2">
              <h1 className="absolute right-full top-1/2 z-[9] -translate-y-1/2 translate-x-1/2 text-5xl text-[#cdea68] ">
                {"VISE".split("").map((e, i) => {
                  return <span key={i}>{e}</span>;
                })}
              </h1>
              <div className=" Card h-full w-full overflow-hidden rounded-xl">
                <img
                  className="h-full w-full overflow-hidden bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
