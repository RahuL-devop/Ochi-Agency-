import React from "react";
import Logo from "../assets/Loogo";
// import Menu from "./Menu";

const Navbar = () => {
  return (
    <>
      <div className="Navbar sticky z-[9999] flex w-full items-center justify-between px-12 py-4">
        <Logo />
        <div className="flex gap-6">
          {["Services", "Our Work", "About us ", "Insights", "Contact us"].map(
            (e, i) => (
              <a
                className={`neue cursor-pointer text-[16px] font-light leading-[12px] ${i === 4 && "ml-[12rem]"}`}
                key={i}
              >
                {e}
              </a>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
