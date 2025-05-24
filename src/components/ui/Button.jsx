// src/components/ui/Button.jsx
import clsx from "clsx";

const Button = ({
  type = "primary",
  className = "",
  size = "md",
  children,
  ...rest
}) => {
  const buttonStyles = {
    primary: "bg-[var(--primary)] text-white",
    secondary: "bg-[#8FE1A8] text-black",
    tertiary: "bg-[var(--destructive-foreground)] text-white",
  };

  const buttonSize = {
    sm: "text-sm px-4 py-2",
    md: "text-base font-bold text-xl px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <button
      className={clsx(
        buttonStyles[type],
        buttonSize[size],
        className,
        "hover:shadow-lg transition-all ease-in-out active:scale-95 rounded-xl"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
