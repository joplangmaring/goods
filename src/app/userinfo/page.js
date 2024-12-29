// app/profile/page.js (for app directory structure)
"use client"; // This ensures it's a client-side component

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession(); // Use session hook
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // If user is logged in, fetch their payment details
    if (session?.user?.email) {
      const fetchPayments = async () => {
        try {
          // Send email to backend to fetch specific user's data using fetch
          const response = await fetch(`/api/payment/save?email=${session.user.email}`);
          
          if (!response.ok) {
            throw new Error("Failed to fetch payment data.");
          }

          const data = await response.json();

          // Ensure we only set payments if the email matches
          if (data.userData) {
            setPayments(data.userData);
          } else {
            setError("No payment data found for this user.");
          }
        } catch (err) {
          setError("An error occurred while fetching the payment data.");
        } finally {
          setLoading(false);
        }
      };

      fetchPayments();
    }
  }, [session]);

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading state while fetching session
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center">
        <h2>You must be logged in to view this page</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <h2 className="text-2xl">Welcome, {session.user.name}</h2>
        <p>Email: {session.user.email}</p>

        {/* Show error message if there's any error */}
        {error && <div className="text-red-500 mt-2">{error}</div>}

        {/* Show loading state while fetching payment details */}
        {loading ? (
          <div>Loading your payment history...</div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mt-4">Your Payment History</h3>
            {payments.length === 0 ? (
              <p>No payment history found.</p>
            ) : (
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-700 text-white">
                    <tr>
                      <th className="px-4 py-2 border-b">Full Name</th>
                      <th className="px-4 py-2 border-b">Plan Type</th>
                      <th className="px-4 py-2 border-b">Invest Amount</th>
                      <th className="px-4 py-2 border-b">Total Amount</th>
                      <th className="px-4 py-2 border-b">Payment Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-900">
                    {payments.map((payment, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b">{payment.fullName}</td>
                        <td className="px-4 py-2 border-b">{payment.planType}</td>
                        <td className="px-4 py-2 border-b">${payment.investAmount}</td>
                        <td className="px-4 py-2 border-b">${payment.totalAmount}</td>
                        <td className="px-4 py-2 border-b">
                          {payment.paymentStatus ? "Paid" : "Pending"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;








// "use client"
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PaymentHistory = () => {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch all payments on component mount
//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const response = await axios.get("/api/payment/save"); // Replace with your actual API endpoint
//         setPayments(response.data.userData);
//       } catch (error) {
//         setError("An error occurred while fetching the data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPayments();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Payment History</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b">Full Name</th>
//               <th className="px-4 py-2 border-b">Email</th>
//               <th className="px-4 py-2 border-b">Phone</th>
//               <th className="px-4 py-2 border-b">City</th>
//               <th className="px-4 py-2 border-b">Country</th>
//               <th className="px-4 py-2 border-b">Plan ID</th>
//               <th className="px-4 py-2 border-b">Plan Type</th>
//               <th className="px-4 py-2 border-b">Invest Amount</th>
//               <th className="px-4 py-2 border-b">Earnings</th>
//               <th className="px-4 py-2 border-b">Total Amount</th>
//               <th className="px-4 py-2 border-b">Payment Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((payment, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="px-4 py-2 border-b">{payment.fullName}</td>
//                 <td className="px-4 py-2 border-b">{payment.email}</td>
//                 <td className="px-4 py-2 border-b">{payment.phone}</td>
//                 <td className="px-4 py-2 border-b">{payment.city}</td>
//                 <td className="px-4 py-2 border-b">{payment.country}</td>
//                 <td className="px-4 py-2 border-b">{payment.planId}</td>
//                 <td className="px-4 py-2 border-b">{payment.planType}</td>
//                 <td className="px-4 py-2 border-b">${payment.investAmount}</td>
//                 <td className="px-4 py-2 border-b">${payment.earnings}</td>
//                 <td className="px-4 py-2 border-b">${payment.totalAmount}</td>
//                 <td className="px-4 py-2 border-b">
//                   {payment.paymentStatus ? "Paid" : "Pending"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PaymentHistory;
