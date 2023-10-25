import React from "react";

export type LinkProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, href, disabled, className, ...rest }: LinkProps) => {
  return (
    <a
      {...rest}
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      className={`text-primary aria-disabled:text-disabled ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
