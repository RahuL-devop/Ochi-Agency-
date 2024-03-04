import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full min-h-screen overflow-hidden text-white bg-zinc-900">
        <Navbar className=" bg-zinc-900" open={open} setOpen={setOpen} />
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
