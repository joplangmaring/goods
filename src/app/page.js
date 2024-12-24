import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Plan from './components/plan';
import Support from './components/support';
import About from './components/about';
import Service from './components/service';
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Plan/>
      <About/>
      <Support/>
      <Service/>
    </div>
  )
}

export default page