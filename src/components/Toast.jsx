// src/components/Toast.jsx
import { useEffect } from "react";
import { create } from "zustand";
import { X } from "lucide-react";

// ✅ Toast store (Zustand)
export const useToast = create((set) => ({
  toasts: [],
  addToast: (message, type = "info") =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        { id: Date.now(), message, type }
      ],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));

const Toast = () => {
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    const timers = toasts.map((t) =>
      setTimeout(() => removeToast(t.id), 5000)
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts]);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      {toasts.map(({ id, message, type }) => (
        <div
          key={id}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg shadow text-white
            ${type === "success" ? "bg-green-600" : type === "error" ? "bg-red-500" : "bg-gray-800"}`}
        >
          <span>{message}</span>
          <button onClick={() => removeToast(id)}>
            <X size={16} className="ml-2" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
