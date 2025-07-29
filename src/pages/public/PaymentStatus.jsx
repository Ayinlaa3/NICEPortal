// src/pages/public/PaymentStatus.jsx

import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const PaymentStatus = () => {
  const [params] = useSearchParams();
  const status = params.get("status");
  const isSuccess = status === "success";
  const isCancelled = status === "cancelled";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--background)]">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-[var(--primary)]">
          {isSuccess && "🎉 Payment Successful!"}
          {isCancelled && "⚠️ Payment Cancelled"}
          {!isSuccess && !isCancelled && "❓ Unknown Payment Status"}
        </h1>

        <p className="max-w-xl text-lg text-gray-700">
          {isSuccess &&
            "Thank you for your payment. Your registration has been submitted and will be reviewed shortly. You will receive an email once approved."}
          {isCancelled &&
            "You cancelled the payment. You can return to registration and try again anytime."}
          {!isSuccess &&
            !isCancelled &&
            "We couldn’t determine the payment outcome. Please contact support or try again."}
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="text-[var(--primary)] font-semibold underline hover:text-blue-700"
          >
            Return to Home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentStatus;


// This code defines a PaymentStatus component that displays the status of a payment based on URL parameters.