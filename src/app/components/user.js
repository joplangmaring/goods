"use client";

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const UserStats = () => {
  const [inView, setInView] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={statsRef}
      className="flex flex-col md:flex-row justify-center items-center gap-8 p-20 bg-gray-900 text-white"
    >
      {/* Each stat block */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          {inView && <CountUp start={0} end={10} duration={3} />} Lakh
        </h2>
        <p className="mt-2 text-lg">Average Users</p>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold">
          {inView && (
            <CountUp start={0} end={1000000} duration={3} separator="," />
          )}
          +
        </h2>
        <p className="mt-2 text-lg">Active Users</p>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold">
          {inView && <CountUp start={0} end={40} duration={3} />}+
        </h2>
        <p className="mt-2 text-lg">Finance Integrations</p>
      </div>
    </div>
  );
};

export default UserStats;
