import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { format } from "date-fns";

const EARLY_BIRD_CUTOFF = new Date("2025-03-01");

const fees = [
  {
    key: "annual_dues",
    title: "Annual Dues",
    description: "Yearly membership dues by category.",
    categories: ["Student", "Graduate", "Associate", "Member", "Fellow"],
    basePrice: 5000,
  },
  {
    key: "conference",
    title: "NICE Conference & AGM",
    description: "International delegate & guest tickets.",
    categories: ["Student", "Graduate", "Associate", "Member", "Fellow", "International Delegate", "Spouse"],
    basePrice: 25000,
  },
  {
    key: "registration",
    title: "New Member Registration",
    description: "Initial registration fee for new members.",
    categories: ["Student", "Graduate", "Associate", "Member", "Fellow - Direct", "Fellow - Invitation"],
    basePrice: 10000,
  },
  {
    key: "foundation",
    title: "Foundation Donation",
    description: "Support the NICE Foundation.",
    categories: ["NICE Chapter", "Scholarship Fund"],
    basePrice: 0,
  },
];

const PaymentPortal = () => {
  const [selectedFee, setSelectedFee] = useState(null);
  const [earlyBird, setEarlyBird] = useState(false);
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    const amount = computeAmount(data);
    console.log("PAYING:", data, amount);
    // Trigger usePaymentGateway here (Paystack or Remita)
  };

  const computeAmount = (form) => {
    if (!selectedFee) return 0;
    let base = selectedFee.basePrice;
    let qty = parseInt(form.quantity || 1);

    if (selectedFee.key === "conference" && new Date() < EARLY_BIRD_CUTOFF) {
      base *= 0.85; // 15% off
      setEarlyBird(true);
    } else {
      setEarlyBird(false);
    }
    return base * qty;
  };

  return (
    <div className="min-h-screen bg-[var(--background)] p-6">
      <h1 className="text-2xl font-bold mb-6">Payment Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Panel - Fee Options */}
        <div className="space-y-4 md:col-span-1">
          {fees.map((fee) => (
            <div
              key={fee.key}
              className={`p-4 border rounded-xl shadow hover:border-[var(--primary)] cursor-pointer ${
                selectedFee?.key === fee.key ? "border-[var(--primary)] bg-[var(--accent)]" : ""
              }`}
              onClick={() => setSelectedFee(fee)}
            >
              <h2 className="font-bold text-lg">{fee.title}</h2>
              <p className="text-sm text-gray-600">{fee.description}</p>
            </div>
          ))}
        </div>

        {/* Right Panel - Form + Summary */}
        <div className="md:col-span-2 space-y-6">
          {selectedFee && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-6 rounded-xl shadow space-y-4"
            >
              <h2 className="text-lg font-semibold">{selectedFee.title} Form</h2>
              <label className="block text-sm font-bold">Category</label>
              <select
                {...register("category")}
                className="w-full border p-3 rounded-md"
              >
                {selectedFee.categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <label className="block text-sm font-bold">Quantity</label>
              <input
                type="number"
                min={1}
                defaultValue={1}
                {...register("quantity")}
                className="w-full border p-3 rounded-md"
              />

              {selectedFee.key === "conference" && (
                <div className="text-sm text-green-600">
                  {earlyBird
                    ? `🎉 Early Bird Discount Applied - Ends ${format(
                        EARLY_BIRD_CUTOFF,
                        "dd MMM yyyy"
                      )}`
                    : `Register before ${format(
                        EARLY_BIRD_CUTOFF,
                        "dd MMM yyyy"
                      )} for 15% off!`}
                </div>
              )}

              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Total Amount:</p>
                <h2 className="text-xl font-bold">
                  ₦{computeAmount(watch())?.toLocaleString()}
                </h2>
              </div>

              <Button type="submit" className="w-full">
                Proceed to Payment
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPortal;