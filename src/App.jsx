import React from "react";
import {
  Navbar,
  Landing,
  Marquee,
  About,
  Eyes,
  Featured,
  Cards,
  Footer,
} from "./Components";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="min-h-screen w-full bg-zinc-900 text-white ">
        <Navbar className=" bg-zinc-900 " />
        <Landing />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;
