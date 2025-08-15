"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"

interface VerificationInputProps {
  length?: number
  onChange?: (code: string) => void
  className?: string
  inputClassName?: string
}

export function VerificationInput({ length = 5, onChange, className, inputClassName }: VerificationInputProps) {
  const [code, setCode] = useState<string[]>(Array(length).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length)
  }, [length])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value

    // Only accept single digit
    if (value.length > 1) return

    // Update the code array
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Call onChange with the complete code
    onChange?.(newCode.join(""))

    // Auto-focus next input if value is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }

    // Move to next input on right arrow
    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }

    // Move to previous input on left arrow
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").slice(0, length)

    if (!/^\d+$/.test(pastedData)) return

    const newCode = [...code]

    for (let i = 0; i < pastedData.length; i++) {
      newCode[i] = pastedData[i]
    }

    setCode(newCode)
    onChange?.(newCode.join(""))

    // Focus the next empty input or the last one
    const nextEmptyIndex = newCode.findIndex((c) => !c)
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    } else {
      inputRefs.current[length - 1]?.focus()
    }
  }

  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={code[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el: any) => (inputRefs.current[index] = el)}
          className={`md:h-14 md:w-12 sm:h-12 sm:w-10 h-10 w-8 rounded-md border border-border-c bg-transparent text-center md:text-xl text-lg focus:border-black focus:outline-none ${inputClassName}`}
        />
      ))}
    </div>
  )
}
