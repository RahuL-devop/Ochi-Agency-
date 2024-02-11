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
      <div className="eyes h-screen w-full overflow-hidden">
        <div
          data-scroll
          data-scroll-speed="-0.7"
          className="relative h-full w-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center"
        >
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-10 ">
            <div className="relative flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-zinc-100 ">
              <div className="relative flex h-2/3 w-2/3 items-center justify-center rounded-full bg-black ">
                <p className="text-[1.5vw] uppercase">Play</p>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line h-15 absolute  left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="h-5 w-5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            <div className="flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-zinc-100 ">
              <div className="relative flex h-2/3 w-2/3 items-center  justify-center rounded-full bg-black ">
                <p className="text-[1.5vw] uppercase">Play</p>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line h-15 absolute  left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="h-5 w-5 rounded-full bg-white"></div>
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
