"use client";
import React, { useState, useEffect, useCallback } from "react";
import Script from "next/script";
import { fetchpayments, fetchuser, initiate } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" });
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const getData = useCallback(async () => {
    try {
      const user = await fetchuser(username);
      setCurrentUser(user);
      const dbPayments = await fetchpayments(username);
      setPayments(dbPayments);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data. Please try again.");
    }
  }, [username]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast.success("Thanks for your donation!", {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      });
      router.push(`/${username}`);
    }
  }, [searchParams, router, username]);

  const handleChange = useCallback((e) => {
    setPaymentform((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const pay = async (amount) => {
    if (loading) return;
    setLoading(true);

    try {
      if (!currentUser.razorpayid) {
        toast.error("Razorpay ID is missing. Please contact the admin.");
        return;
      }

      const { id: orderId } = await initiate(amount, username, paymentform);
      const options = {
        key: currentUser.razorpayid,
        amount,
        currency: "INR",
        name: "Get Me A Chai",
        description: "Support your favorite creator",
        image: currentUser.profilepic,
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          name: paymentform.name || "Anonymous",
          email: currentUser.email || "example@example.com",
        },
        theme: { color: "#3399cc" },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
      rzp1.on("payment.failed", (response) => {
        toast.error(`Payment Failed: ${response.error.description}`);
      });
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment initiation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="container mx-auto py-10 px-4 text-white">
          <div className="flex flex-col items-center">
            <Image
              src={currentUser.profilepic || "/default-profile.png"}
              alt={`${currentUser.name}'s profile`}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h1 className="text-3xl font-bold mt-4">{currentUser.name || "Anonymous User"}</h1>
            <p className="text-lg mt-2">{currentUser.username || "No Username Available"}</p>
          </div>

          <div className="mt-10 max-w-lg mx-auto">
            <form
              className="bg-slate-900 p-6 rounded-lg shadow-lg"
              onSubmit={(e) => {
                e.preventDefault();
                if (!paymentform.amount || paymentform.amount <= 0) {
                  toast.error("Please enter a valid amount.");
                  return;
                }
                pay(paymentform.amount * 100); // Convert to paise
              }}
            >
              <h2 className="text-xl font-bold mb-4">Support {currentUser.name}</h2>
              <div className="space-y-4">
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={paymentform.name}
                    onChange={handleChange}
                    className="mt-1 bg-gray-800 block w-full p-2 rounded-md"
                    placeholder="Enter your name (optional)"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={paymentform.message}
                    onChange={handleChange}
                    className="mt-1 bg-gray-800 block w-full p-2 rounded-md"
                    placeholder="Leave a message for the creator (optional)"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="amount" className="block text-sm font-medium">
                    Amount (INR)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={paymentform.amount}
                    onChange={handleChange}
                    className="mt-1 bg-gray-800 block w-full p-2 rounded-md"
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Pay Now"}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 max-w-lg mx-auto">
            <h3 className="text-xl font-bold mb-4">Recent Payments</h3>
            <ul className="space-y-4">
              {payments.map((payment, index) => (
                <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                  <p className="text-sm">
                    <strong>Name:</strong> {payment.name || "Anonymous"}
                  </p>
                  <p className="text-sm">
                    <strong>Message:</strong> {payment.message || "No message provided"}
                  </p>
                  <p className="text-sm">
                    <strong>Amount:</strong> ₹{payment.amount / 100}
                  </p>
                </li>
              ))}
              {payments.length === 0 && (
                <p className="text-center text-gray-400">No payments made yet.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
