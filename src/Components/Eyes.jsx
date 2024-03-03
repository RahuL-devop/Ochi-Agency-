import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaY = mouseY - window.innerHeight / 2;
      let deltaX = mouseX - window.innerWidth / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <>
      <div className="w-full h-screen overflow-hidden eyes">
        <div
          data-scroll
          data-scroll-speed="-0.7"
          className="relative h-full w-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-contain bg-center bg-no-repeat md:bg-cover"
        >
          <div className="absolute flex gap-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
            <div className="relative flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-zinc-100 ">
              <div className="relative flex items-center justify-center w-2/3 bg-black rounded-full h-2/3 ">
                <p className="text-[1.5vw] uppercase">Play</p>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute w-full -translate-x-1/2 -translate-y-1/2 line h-15 left-1/2 top-1/2"
                >
                  <div className="w-4 h-4 bg-white rounded-full md:h-5 md:w-5"></div>
                </div>
              </div>
            </div>
            <div className="flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-zinc-100 ">
              <div className="relative flex items-center justify-center w-2/3 bg-black rounded-full h-2/3 ">
                <p className="text-[1.5vw] uppercase">Play</p>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute w-full -translate-x-1/2 -translate-y-1/2 line h-15 left-1/2 top-1/2"
                >
                  <div className="w-4 h-4 bg-white rounded-full md:h-5 md:w-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
