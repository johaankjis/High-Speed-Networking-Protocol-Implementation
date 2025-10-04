"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { TrendingDown } from "lucide-react"

const latencyData = [
  { stage: "Baseline", latency: 850, color: "oklch(0.55 0.02 264)" },
  { stage: "Optimized", latency: 540, color: "oklch(0.65 0.22 264)" },
]

export function LatencyMetrics() {
  const reduction = ((850 - 540) / 850) * 100

  return (
    <Card className="border-border bg-card p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">End-to-End Latency</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold text-foreground font-mono">540</span>
            <span className="text-lg text-muted-foreground">ns</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-sm text-success">
            <TrendingDown className="h-3 w-3" />
            <span>{reduction.toFixed(1)}% reduction achieved</span>
          </div>
        </div>
        <div className="rounded-lg bg-success/10 px-3 py-1.5">
          <span className="text-xs font-medium text-success">Target: &lt;35% ✓</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={latencyData}>
          <XAxis dataKey="stage" stroke="oklch(0.55 0.02 264)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="oklch(0.55 0.02 264)" fontSize={12} tickLine={false} axisLine={false} domain={[0, 1000]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "oklch(0.15 0.01 264)",
              border: "1px solid oklch(0.25 0.02 264)",
              borderRadius: "0.5rem",
              color: "oklch(0.95 0.01 264)",
            }}
          />
          <Bar dataKey="latency" fill="oklch(0.65 0.22 264)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
