"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Plan = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState({ id: null, type: null });
  const [loading, setLoading] = useState(false);
  const { data: session} = useSession();

  const plansData = {
    basic: [
      { id: 1, invest: 100, earnings: 50, days: '9days', total: 150 },
      { id: 2, invest: 200, earnings: 60, days: '9days', total: 260 },
      { id: 3, invest: 300, earnings: 80, days: '9days', total: 380 },
      { id: 4, invest: 400, earnings: 100, days: '9days', total: 500 },
      { id: 5, invest: 500, earnings: 150, days: '9days', total: 650 },
    ],
    advanced: [
      { id: 1, invest: 600, earnings: 200, total: 800 },
      { id: 2, invest: 700, earnings: 300, total: 1000 },
      { id: 3, invest: 800, earnings: 300, total: 1100 },
      { id: 4, invest: 1000, earnings: 500, total: 1500 },
      { id: 5, invest: 2000, earnings: 1000, total: 3000 },
    ],
    premium: [
      { id: 1, invest: 5000, earnings: 2000, total: 7000 },
      { id: 2, invest: 7000, earnings: 3000, total: 9000 },
      { id: 3, invest: 9000, earnings: 4000, total: 13000 },
      { id: 4, invest: 12000, earnings: 7000, total: 19000 },
      { id: 5, invest: 14000, earnings: 8000, total: 22000 },
    ],
    vip: [
      { id: 1, invest: 15000, earnings: 10000, total: 25000 },
      { id: 2, invest: 17000, earnings: 14000, total: 31000 },
      { id: 3, invest: 20000, earnings: 18000, total: 38000 },
      { id: 4, invest: 25000, earnings: 20000, total: 45000 },
      { id: 5, invest: 30000, earnings: 23000, total: 53000 },
    ],
    elite: [
      { id: 1, invest: 40000, earnings: 30000, total: 70000 },
      { id: 2, invest: 50000, earnings: 40000, total: 90000 },
      { id: 3, invest: 40000, earnings: 30000, total: 70000 },
      { id: 4, invest: 40000, earnings: 30000, total: 70000 },
      { id: 5, invest: 40000, earnings: 30000, total: 70000 },
    ],
    ultimate: [
      { id: 1, invest: 50000, earnings: 40000, total: 90000 },
      { id: 2, invest: 60000, earnings: 50000, total: 110000 },
      { id: 3, invest: 80000, earnings: 70000, total: 150000 },
      { id: 4, invest: 90000, earnings: 80000, total: 170000 },
      { id: 5, invest: 100000, earnings: 100000, total: 200000 },
    ],
  };

  const handleInvest = () => {
    if (selectedPlan.id === null || selectedPlan.type === null) {
      alert('Please select a plan first!');
      return;
    }

    setLoading(true);  // Start loading

    const queryParams = new URLSearchParams({
      planId: selectedPlan.id,
      planType: selectedPlan.type,
      investAmount: selectedPlan.invest,
      earnings: selectedPlan.earnings,
      totalAmount: selectedPlan.total,
    }).toString();

    router.push(`/form?${queryParams}`); // Navigate to the form page

    // No need for `then()`, just handle loading directly after push
    setLoading(false);
  };

  const handleSelectPlan = (id, type) => {
    const selectedPlanData = plansData[type]?.find(plan => plan.id === id); // Find the selected plan in the plansData

    if (selectedPlanData) {
      setSelectedPlan((prev) =>
        prev.id === id && prev.type === type
          ? { id: null, type: null, invest: null, earnings: null, total: null } // Deselect if the same plan is selected
          : {
            id,
            type,
            invest: selectedPlanData.invest,
            earnings: selectedPlanData.earnings,
            total: selectedPlanData.total
          }
      );
    } else {
      // Clear the selected plan if no plan data is found
      setSelectedPlan({ id: null, type: null, invest: null, earnings: null, total: null });
    }
  };

  const renderPlans = (plans, type, title) => (
    <div className="border border-gray-300 rounded-lg shadow-lg p-6 w-full bg-black bg-opacity-50 text-white">
      <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
      <div className="space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-4 border rounded-lg flex items-center cursor-pointer transition ${selectedPlan.id === plan.id && selectedPlan.type === type
              ? "border-green-500 bg-green-900 bg-opacity-30"
              : "border-gray-500 hover:bg-gray-700"
              }`}
            onClick={() => handleSelectPlan(plan.id, type)}
          >
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 mr-4 ${selectedPlan.id === plan.id && selectedPlan.type === type
                ? "border-green-500"
                : "border-gray-500"
                }`}
            >
              {selectedPlan.id === plan.id && selectedPlan.type === type && (
                <span className="text-green-500 font-bold">&#10003;</span>
              )}
            </div>
            <div className="text-left">
              <p className="text-lg mb-2">
                Invest Amount: <span className="font-semibold">{plan.invest}</span>
              </p>
              <p className="text-lg mb-2">
                Earnings: <span className="font-semibold">{plan.earnings}</span>
              </p>
              <p className="text-lg mb-2">
                Earnings Days: <span className="font-semibold">{plan.days}</span>
              </p>
              <p className="text-lg mb-0">
                Total Amount: <span className="font-semibold">{plan.total}</span>
              </p>
              {!session ? (
                <>
                  <p className="text-white font-semibold text-center py-2 px-4 rounded-md shadow-lg bg-gradient-to-r from-red-500 via-transparent to-blue-500">
                    Please signup/signin
                  </p>


                </>
              ) : (
                <>
                  <button
                    className=" text-center bg-gradient-to-r from-[#91ADBA] to-[#205166] text-white font-semibold py-2 px-4 w-full rounded-full hover:bg-blue-600 transition"
                    onClick={handleInvest}  // Trigger the invest function on click
                  >
                    Invest Now
                  </button>
                </>
              )

              }

            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center p-6 bg-black">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderPlans(plansData.basic, "basic", "Basic Plan")}
        {renderPlans(plansData.advanced, "advanced", "Advanced Plan")}
        {renderPlans(plansData.premium, "premium", "Premium Plan")}
        {renderPlans(plansData.vip, "vip", "Vip Plan")}
        {renderPlans(plansData.elite, "elite", "Elite Plan")}
        {renderPlans(plansData.ultimate, "ultimate", "Ultimate Plan")}
      </div>
    </div>
  );
};

export default Plan;


















