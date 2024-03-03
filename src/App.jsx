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
      <div className="w-full min-h-screen overflow-hidden text-white bg-zinc-900">
        <Navbar className=" bg-zinc-900" />
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
