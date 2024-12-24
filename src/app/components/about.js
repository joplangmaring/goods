import React from 'react';
import Image from 'next/image';
import indian from '../../../public/indianmoney.jpg';

const About = () => {
  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${indian.src})` }}
    >
      <div className="bg-black bg-opacity-80 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-6">
            About Indian Money
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Founded by visionary entrepreneur{' '}
            <span className="text-white font-semibold">Ravaan Kumar</span> in
            the bustling city of Pune, Indian Money is an investment company
            with a heart and a mission. Established in 2004, the company stands
            as a pillar of support for students who bravely navigate the dual
            challenge of studying while supporting themselves financially.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            At its core, Indian Money aims to bridge the gap between ambition
            and resources by providing tailored financial solutions that empower
            students to thrive academically and personally. The company
            understands the unique struggles of self-supporting students and is
            dedicated to helping them build a secure financial foundation while
            pursuing their dreams.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Whether it's offering investment opportunities, guiding them towards
            smart financial planning, or providing funding solutions, Indian
            Money ensures that students can focus on their education without
            compromising on their aspirations.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            With a compassionate approach and a clear mission, Indian Money
            continues to inspire and uplift countless students across India,
            transforming lives and shaping futures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
