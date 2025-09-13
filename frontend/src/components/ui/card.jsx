import React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return <div className={cn("rounded-xl border bg-white shadow", className)} {...props} />
}

function CardContent({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />
}

export { Card, CardContent }
