// src/hooks/usePaymentGateway.js
export const usePaymentGateway = () => {
  const initializePaystack = ({ email, amount, metadata, onSuccess, onClose }) => {
    if (!window.PaystackPop) {
      alert("Paystack is not loaded. Check your network or integration.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email,
      amount: amount * 100, // Convert to kobo
      currency: "NGN",
      metadata,
      callback: onSuccess,
      onClose,
    });

    handler.openIframe();
  };

  return { initializePaystack };
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
