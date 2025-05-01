import clsx from "clsx";

const Button = ({
  type = "primary",
  className,
  size = "md",
  children,
  ...rest
}) => {
  const buttonStyles = {
    primary: "bg-(--primary) text-white",
    secondary: "bg-[#8FE1A8] text-black",
    // tertiary: "bg-[#03823B] text-[#FEF303]",
    // default: "bg-[#03823B] text-[#FEF303]",
  };

  const buttonSize = {
    sm: "text-sm",
    md: "text-base font-bold text-xl px-6 py-3",
    lg: "text-lg",
  };

  return (
    <button
      className={clsx(
        buttonStyles[type],
        buttonSize[size],
        className,
        "hover:shadow-lg transition-all ease-in-out active:scale-95",
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
