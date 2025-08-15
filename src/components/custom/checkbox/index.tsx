"use client"

import * as React from "react"
import { Check } from "lucide-react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode
  className?: string
  labelClassName?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, labelClassName, id, ...props }, ref) => {
    const [checked, setChecked] = React.useState(props.checked || false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked)
      if (props.onChange) {
        props.onChange(e)
      }
    }

    console.log(checked);
    return (
      <div className="flex items-start w-full">
        <div className="relative flex items-center h-5">
          <input
            type="checkbox"
            className="peer h-4 w-4 cursor-pointer appearance-none rounded-none border border-border-c bg-transparent focus:outline-none focus:ring-0 focus:ring-offset-0"
            ref={ref}
            id={id}
            {...props}
            checked={checked}
            onChange={handleChange}
          />
          <div className="pointer-events-none absolute left-0 top-0.5 flex h-4 w-4 items-center justify-center opacity-0 transition-opacity peer-checked:opacity-100">
            <Check className="h-3 w-3 text-black" strokeWidth={3} />
          </div>
        </div>
        {label && (
          <div className="ml-3 w-full">
            <label htmlFor={id} className={`text-black text-sm ${labelClassName}`}>
              {label}
            </label>
          </div>
        )}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox }
