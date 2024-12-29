"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all payments on component mount
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get("/api/payment/fetchall"); // Replace with your actual API endpoint
        setPayments(response.data.userData);
      } catch (error) {
        setError("An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Full Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">City</th>
              <th className="px-4 py-2 border-b">Country</th>
              <th className="px-4 py-2 border-b">Plan ID</th>
              <th className="px-4 py-2 border-b">Plan Type</th>
              <th className="px-4 py-2 border-b">Invest Amount</th>
              <th className="px-4 py-2 border-b">Earnings</th>
              <th className="px-4 py-2 border-b">Total Amount</th>
              <th className="px-4 py-2 border-b">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{payment.fullName}</td>
                <td className="px-4 py-2 border-b">{payment.email}</td>
                <td className="px-4 py-2 border-b">{payment.phone}</td>
                <td className="px-4 py-2 border-b">{payment.city}</td>
                <td className="px-4 py-2 border-b">{payment.country}</td>
                <td className="px-4 py-2 border-b">{payment.planId}</td>
                <td className="px-4 py-2 border-b">{payment.planType}</td>
                <td className="px-4 py-2 border-b">${payment.investAmount}</td>
                <td className="px-4 py-2 border-b">${payment.earnings}</td>
                <td className="px-4 py-2 border-b">${payment.totalAmount}</td>
                <td className="px-4 py-2 border-b">
                  {payment.paymentStatus ? "Paid" : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
