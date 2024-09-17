'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TextInputProps {
  label: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export function TextInput({ label, placeholder, value, onChange }: TextInputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={label}>{label}</Label>
      <Input
        type="text"
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}