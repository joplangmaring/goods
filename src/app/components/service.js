import React from 'react';

const Service = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Services Offered by Indian Money
        </h1>

        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          Student-Centric Investment Solutions
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          Indian Money specializes in providing low-investment financial solutions tailored for students. Recognizing the challenges faced by self-supporting students, the company ensures that its services are designed to accommodate limited budgets while offering maximum value and growth potential.
        </p>

        {/* Key Features */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Key Features of the Service
          </h2>
          <ul className="space-y-4">
            <li>
              <span className="font-bold text-white">Low Initial Investment:</span>{' '}
              Students can start investing with minimal amounts, making it accessible to those managing tight budgets.
            </li>
            <li>
              <span className="font-bold text-white">Flexible Investment Plans:</span>{' '}
              Customized plans that allow students to contribute according to their financial capability without undue pressure.
            </li>
            <li>
              <span className="font-bold text-white">Financial Education & Guidance:</span>{' '}
              Free resources and expert advice to help students make informed decisions and understand the basics of smart investing.
            </li>
            <li>
              <span className="font-bold text-white">Short-Term & Long-Term Growth Options:</span>{' '}
              Investment plans are designed to provide returns that align with students' goals, whether it’s for immediate needs or future aspirations.
            </li>
            <li>
              <span className="font-bold text-white">Safe & Secure Investments:</span>{' '}
              Indian Money ensures that every investment is secure, giving students peace of mind as they focus on their studies.
            </li>
          </ul>
        </div>

        {/* Closing Note */}
        <p className="text-lg leading-relaxed text-gray-300 mt-8">
          This unique service reflects Indian Money’s commitment to helping students grow both academically and financially, ensuring that their journey toward success is supported at every step.
        </p>
      </div>
    </div>
  );
};

export default Service;
