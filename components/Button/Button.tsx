export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(
  variant: ButtonProps["variant"],
  disabled: ButtonProps["disabled"]
) {
  switch (variant) {
    case "primary":
      return disabled ? "bg-disabled text-disabled" : "bg-primary text-white";
    case "secondary":
      return disabled
        ? "bg-disabled text-disabled"
        : "bg-quaternary text-primary";
    case "tertiary":
      return disabled ? "text-disabled" : "text-primary";

    default:
      return disabled ? "" : "";
  }
}

const Button = ({
  variant = "primary",
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`rounded-md px-6 py-2 ${getVariant(
        variant,
        disabled
      )} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
