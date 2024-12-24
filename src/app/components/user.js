"use client"

import React from 'react';
import CountUp from 'react-countup';

const UserStats = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-20 bg-gray-900 text-white">
      {/* Each stat block */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          <CountUp start={0} end={10} duration={3} /> Lakh
        </h2>
        <p className="mt-2 text-lg">Average Users</p>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold">
          <CountUp start={0} end={1000000} duration={3} separator="," />+
        </h2>
        <p className="mt-2 text-lg">Active Users</p>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold">
          <CountUp start={0} end={40} duration={3} />+
        </h2>
        <p className="mt-2 text-lg">Finance Integrations</p>
      </div>
    </div>
  );
};

export default UserStats;
