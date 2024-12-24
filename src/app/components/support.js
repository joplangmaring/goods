import React from 'react';
import icic from '../../../public/icic.jpg';
import hdfc from '../../../public/hdfc.jpg';
import tcs from '../../../public/tcs.png';
import sbi from '../../../public/sbilogo.png';
import Image from 'next/image';

const Support = () => {
  return (
    <div className="py-8 px-4 text-center bg-black">
      <h1 className="text-3xl font-bold mb-8 uppercase text-white">
        Support Partners
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <div className="w-40 h-40">
          <Image src={icic} alt="ICIC Logo" className="object-contain" />
        </div>
        <div className="w-40 h-40">
          <Image src={hdfc} alt="HDFC Logo" className="object-contain" />
        </div>
        <div className="w-40 h-40">
          <Image src={sbi} alt="SBI Logo" className="object-contain" />
        </div>
        <div className="w-40 h-40">
          <Image src={tcs} alt="TCS Logo" className="object-contain" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-12 flex-wrap mt-8">
        <div className="w-40 h-40">
          <Image src={icic} alt="ICIC Logo" className="object-contain" />
        </div>
        <div className="w-40 h-40">
          <Image src={hdfc} alt="HDFC Logo" className="object-contain" />
        </div>
        <div className="w-40 h-40">
          <Image src={sbi} alt="SBI Logo" className="object-contain" />
        </div>
        <div className="w-40 h-40">
          <Image src={tcs} alt="TCS Logo" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Support;
