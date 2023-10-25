export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, disabled, ...rest }: ButtonProps) => {
  const generalStyles = "rounded-md px-6 py-2";
  const Btn = (classes: string) => (
    <button
      {...rest}
      className={`${classes} ${generalStyles} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );

  return Btn(disabled ? "bg-disabled text-disabled" : "bg-primary text-white");
};

export default Button;
