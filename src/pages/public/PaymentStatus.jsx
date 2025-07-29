// src/pages/public/PaymentStatus.jsx
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PaymentStatus = () => {
  const [params] = useSearchParams();
  const status = params.get("status");
  const reference = params.get("ref");

  const isSuccess = status === "success";
  const isCancelled = status === "cancelled";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--background)]">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <h1 className="text-3xl font-bold mb-4">
          {isSuccess && "Payment Successful ✅"}
          {isCancelled && "Payment Cancelled ❌"}
          {!isSuccess && !isCancelled && "Unknown Payment Status"}
        </h1>

        <p className="text-lg max-w-xl mb-2">
          {isSuccess && "Thank you! Your registration is complete and will be reviewed shortly."}
          {isCancelled && "You cancelled the payment. You may try again later."}
          {!isSuccess && !isCancelled && "We couldn’t determine the payment outcome. Please contact support."}
        </p>

        {reference && (
          <p className="text-sm text-gray-500">Reference: {reference}</p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default PaymentStatus;

// This code defines a PaymentStatus component that displays the status of a payment based on URL parameters.