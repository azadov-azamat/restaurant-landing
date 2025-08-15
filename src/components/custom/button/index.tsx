"use client"

import type React from "react"
import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-gray-800 focus-visible:ring-black",
        secondary: "bg-white text-black border border-black hover:bg-gray-100 focus-visible:ring-black",
        outline:
          "border border-black bg-transparent text-black hover:bg-black hover:text-white focus-visible:ring-black",
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        md: "h-12 px-6 py-3 text-base",
        lg: "h-14 px-8 py-4 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  showArrow?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      icon,
      iconPosition = "right",
      showArrow = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button className={buttonVariants({ variant, size, fullWidth, className })} ref={ref} {...props}>
        {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
        {children}
        {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
        {iconPosition === "right" && icon && !showArrow && <span className="ml-2">{icon}</span>}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants }
