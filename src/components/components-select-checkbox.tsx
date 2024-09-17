'use client'

import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface CheckboxProps {
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function Checkbox({ label, checked, onCheckedChange }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <ShadcnCheckbox id={label} checked={checked} onCheckedChange={onCheckedChange} />
      <Label htmlFor={label}>{label}</Label>
    </div>
  )
}