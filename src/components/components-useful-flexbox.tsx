import { cn } from "@/lib/utils"

interface FlexboxProps {
  children: React.ReactNode
  className?: string
  direction?: "row" | "col"
  justify?: "start" | "end" | "center" | "between" | "around"
  align?: "start" | "end" | "center" | "stretch" | "baseline"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
}

export function Flexbox({
  children,
  className,
  direction = "row",
  justify = "start",
  align = "start",
  wrap = "nowrap",
}: FlexboxProps) {
  return (
    <div
      className={cn(
        "flex",
        {
          "flex-row": direction === "row",
          "flex-col": direction === "col",
          "justify-start": justify === "start",
          "justify-end": justify === "end",
          "justify-center": justify === "center",
          "justify-between": justify === "between",
          "justify-around": justify === "around",
          "items-start": align === "start",
          "items-end": align === "end",
          "items-center": align === "center",
          "items-stretch": align === "stretch",
          "items-baseline": align === "baseline",
          "flex-nowrap": wrap === "nowrap",
          "flex-wrap": wrap === "wrap",
          "flex-wrap-reverse": wrap === "wrap-reverse",
        },
        className
      )}
    >
      {children}
    </div>
  )
}