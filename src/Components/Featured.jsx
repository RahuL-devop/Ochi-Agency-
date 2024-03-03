import React from "react";

const Featured = () => {
  return (
    <>
      <div className="w-full py-28 ">
        <div className="w-full">
          <h1 className="px-4 font-['Neue_Montreal'] text-6xl text-white md:px-12">
            Featured projects{" "}
          </h1>
        </div>
        <div className="mt-10 w-full border-b-[1px] bg-zinc-600"></div>
        <div className="px-12">
          <div className="flex flex-col w-full gap-10 mt-10 Cards md:flex-row">
            <div className="Card_Container relative h-[80vh] w-full md:w-1/2 ">
              <h1 className="absolute left-full top-1/2 z-[9] -translate-x-1/2 -translate-y-1/2 text-5xl text-[#cdea68] ">
                {"FYND".split("").map((e, i) => {
                  return <span key={i}></span>;
                })}
              </h1>
              <div className="w-full h-full overflow-hidden Card rounded-xl">
                <img
                  className="w-full h-full overflow-hidden bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
            </div>
            <div className="Card_Container relative h-[80vh] w-full md:w-1/2 ">
              <h1 className="absolute right-full top-1/2 z-[9] -translate-y-1/2 translate-x-1/2 text-5xl text-[#cdea68] ">
                {"VISE".split("").map((e, i) => {
                  return <span key={i}> </span>;
                })}
              </h1>
              <div className="w-full h-full overflow-hidden Card rounded-xl">
                <img
                  className="w-full h-full overflow-hidden bg-cover"
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
