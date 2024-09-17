'use client'

import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbsProps {
  items: { label: string; href: string }[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
            <a
              href={item.href}
              className={cn(
                "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600",
                index === 0 && "ml-1",
                index > 0 && "ml-2"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}