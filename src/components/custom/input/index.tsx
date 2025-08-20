"use client"

import type React from "react"

import { forwardRef, type InputHTMLAttributes, useState, useEffect } from "react"

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  className?: string
  inputClassName?: string
  labelClassName?: string
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, inputClassName, labelClassName, value, defaultValue, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(!!value || !!defaultValue)
    const [inputValue, setInputValue] = useState(value || defaultValue || "")

    useEffect(() => {
      if (value !== undefined) {
        setHasValue(!!value)
        setInputValue(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)
      setHasValue(!!newValue)
      props.onChange?.(e)
    }

    return (
      <div className={`relative w-full pt-6 ${className}`}>
        <label
          className={`absolute left-0 transition-all duration-200 pointer-events-none text-[#585858]
            ${isFocused || hasValue ? "top-0 text-sm" : "top-6 text-base"}

            ${error && "text-primary-red"}
            ${labelClassName}
            `}
        >
          {label}
        </label>
        <input
          className={`w-full border-0 border-b border-black bg-transparent pb-2 text-base outline-none transition-all
            focus:border-gray-800 focus:ring-0
            ${error && "border-primary-red"}
            ${inputClassName}
           `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
          value={inputValue}
          onChange={handleChange}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-start text-red-500">{error}</p>}
      </div>
    )
  },
)

InputField.displayName = "InputField"

export { InputField }
