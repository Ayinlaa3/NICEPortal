// src/hooks/usePaymentGateway.js


export const usePaymentGateway = () => {
  const initializePaystack = ({
    email,
    amount,
    metadata,
    onSuccess,
    onClose,
  }) => {
    const paystackPop = window.PaystackPop || getDummyPaystack();

    const handler = paystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "demo_key",
      email,
      amount: amount * 100, // Convert to kobo
      currency: "NGN",
      metadata,
      callback: function (response) {
        onSuccess(response);
      },
      onClose: function () {
        if (onClose) onClose();
      },
    });

    handler.openIframe();
  };

  return { initializePaystack };
};

// Dummy fallback for local testing
const getDummyPaystack = () => {
  return {
    setup: ({ email, amount, metadata, callback, onClose }) => {
      return {
        openIframe: () => {
          console.log("🧪 [Demo] Paystack Payment Simulation Started");
          console.log("Email:", email);
          console.log("Amount (kobo):", amount);
          console.log("Metadata:", metadata);

          setTimeout(() => {
            // Simulate success response
            callback({
              status: "success",
              reference: "demo_ref_" + Math.floor(Math.random() * 100000),
            });
            console.log("✅ [Demo] Payment simulated successfully");
          }, 1000);

          // Optionally simulate closing
          window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && onClose) {
              console.log("❌ [Demo] Payment simulation closed");
              onClose();
            }
          });
        },
      };
    },
  };
};




// export const usePaymentGateway = () => {
//   const initializePaystack = ({ email, amount, metadata, onSuccess, onClose }) => {
//     const handler = window.PaystackPop && window.PaystackPop.setup({
//       key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
//       email,
//       amount: amount * 100, // in kobo
//       currency: "NGN",
//       metadata,
//       callback: function (response) {
//         onSuccess(response);
//       },
//       onClose: function () {
//         if (onClose) onClose();
//       },
//     });

//     if (handler) handler.openIframe();
//     else alert("Paystack SDK not loaded.");
//   };

//   return { initializePaystack };
// };
