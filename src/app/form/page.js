"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const Form = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
  });

  const planData = {
    id: searchParams.get("planId"),
    type: searchParams.get("planType"),
    invest: searchParams.get("investAmount"),
    earnings: searchParams.get("earnings"),
    total: searchParams.get("totalAmount"),
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  useEffect(() => {
    // Dynamically load the Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (session) {
      // Pre-fill the form fields with session data (e.g., fullName and email)
      setFormData({
        fullName: session.user.name || "",
        email: session.user.email || "",
        phone: "",
        city: "",
        country: "",
      });
    }
  }, [session]); // Runs whenever the session data changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayment = async (plan) => {
    if (!isFormValid()) {
      alert("Please fill up all the form fields before proceeding.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    setLoading(true);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: plan.invest * 100, // Amount in smallest currency unit (e.g., paise)
      currency: "INR",
      name: "Investment Plan",
      description: `Investing in ${plan.type} plan`,
      handler: async function (response) {
        setLoading(false);
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);

        // Save user payment data to the database
        try {
          const response = await fetch("/api/payment/save", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName: formData.fullName,
              email: formData.email,
              phone: formData.phone,
              city: formData.city,
              country: formData.country,
              planId: plan.id,
              planType: plan.type,
              investAmount: plan.invest,
              earnings: plan.earnings,
              totalAmount: plan.total,
              paymentStatus: { type: Boolean, default: false }
            }),
          });

          const data = await response.json();
          if (response.ok) {
            alert(data.message);
          } else {
            alert(`Error: ${data.message}`);
          }
        } catch (error) {
          alert("An error occurred while saving data.");
        }
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
      },
      theme: {
        color: "#528FF0",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="min-h-screen flex-col flex items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6 w-full text-center">
        Please fill up all the details to proceed to payment
      </h1>
      {/* Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Form Section */}
        <div className="flex-1 p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Form</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              readOnly
              onChange={handleInputChange}
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              readOnly
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </form>
        </div>

        {/* Plan Details Section */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Selected Plan Details
            </h2>
            <p className="mb-2">
              <span className="font-semibold">Plan Type:</span> {planData.type || "N/A"}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Investment Amount:</span> {planData.invest || "N/A"}
            </p>
          </div>

          {/* Submit Button on Plan Details Side */}
          <button
            type="button"
            onClick={() => handlePayment(planData)}
            disabled={loading || !isFormValid()}
            className="bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition"
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
