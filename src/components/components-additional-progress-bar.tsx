'use client'

import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
  value: number
  max?: number
}

export function ProgressBar({ value, max = 100 }: ProgressBarProps) {
  return <Progress value={value} max={max} className="w-[60%]" />
}