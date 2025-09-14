import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-300 focus-visible:ring-primary-500",
        error: "border-danger-500 focus-visible:ring-danger-500",
        success: "border-success-500 focus-visible:ring-success-500",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-2 py-1.5 text-sm",
        lg: "h-11 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string
  error?: string
  helper?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onRightIconClick?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant, 
    size, 
    type = "text", 
    label, 
    error, 
    helper, 
    leftIcon, 
    rightIcon, 
    onRightIconClick,
    ...props 
  }, ref) => {
    const inputId = React.useId()
    const hasError = Boolean(error)
    const currentVariant = hasError ? "error" : variant

    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={inputId} 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {leftIcon}
            </div>
          )}
          
          <input
            id={inputId}
            type={type}
            className={cn(
              inputVariants({ variant: currentVariant, size, className }),
              leftIcon && "pl-10",
              rightIcon && "pr-10"
            )}
            ref={ref}
            {...props}
          />
          
          {rightIcon && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={onRightIconClick}
              tabIndex={-1}
            >
              {rightIcon}
            </button>
          )}
        </div>
        
        {(error || helper) && (
          <p className={cn(
            "text-xs",
            hasError ? "text-danger-600" : "text-gray-800"
          )}>
            {error || helper}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
