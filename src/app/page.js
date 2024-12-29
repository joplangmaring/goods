import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Plan from "./components/plan";
import Support from "./components/support";
import About from "./components/about";
import Service from "./components/service";
import Footer from "./components/footer";
import User from "./components/user";

const Page = async () => {


  return (
    
    <div>
      <Navbar />
      <Hero />
      <Plan />
      <About />
      <User/>
      <Support />
      <Service />
      <Footer />
    </div>
  );
};

export default Page;
