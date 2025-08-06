// src/components/ui/Button.jsx
import clsx from "clsx";

const Button = ({
  variant = "primary",
  className = "",
  size = "md",
  children,
  ...rest
}) => {
  const buttonStyles = {
    primary: "bg-[var(--primary)] text-white",
    secondary: "bg-[#8FE1A8] text-black",
    tertiary: "bg-[var(--destructive-foreground)] text-white",
    outline: "border border-[var(--primary)] text-[var(--primary)] bg-transparent",
  };

  const buttonSize = {
    xs: "text-xs px-3 py-1.5", // New smaller button size
    sm: "text-sm px-4 py-2",
    md: "text-base font-bold text-xl px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <button
      className={clsx(
        buttonStyles[variant],
        buttonSize[size],
        className,
        "hover:shadow-md transition-all ease-in-out active:scale-95 rounded-lg"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
