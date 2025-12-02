import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", asChild = false, className = "", children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const base =
      "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition shadow-sm";
    const variants: Record<string, string> = {
      primary: "bg-neutral-900 text-white hover:bg-neutral-800",
      outline:
        "border border-neutral-900 text-neutral-900 bg-white hover:bg-neutral-100",
      ghost: "text-neutral-700 hover:bg-neutral-100",
    };

    return (
      <Comp ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
