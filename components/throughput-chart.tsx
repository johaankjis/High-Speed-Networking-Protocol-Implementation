"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ArrowUp } from "lucide-react"

// Mock data for 100G throughput over time
const generateThroughputData = () => {
  const data = []
  const baseValue = 92
  for (let i = 0; i < 60; i++) {
    data.push({
      time: i,
      throughput: baseValue + Math.random() * 6 - 2,
      target: 100,
    })
  }
  return data
}

export function ThroughputChart() {
  const data = generateThroughputData()
  const currentThroughput = data[data.length - 1].throughput

  return (
    <Card className="border-border bg-card p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Network Throughput</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold text-foreground font-mono">{currentThroughput.toFixed(1)}</span>
            <span className="text-lg text-muted-foreground">Gbps</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-sm text-success">
            <ArrowUp className="h-3 w-3" />
            <span>98.2% of 100G capacity</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-chart-1" />
            <span className="text-xs text-muted-foreground">Current</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
            <span className="text-xs text-muted-foreground">Target</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="oklch(0.55 0.02 264)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="oklch(0.55 0.02 264)" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "oklch(0.15 0.01 264)",
              border: "1px solid oklch(0.25 0.02 264)",
              borderRadius: "0.5rem",
              color: "oklch(0.95 0.01 264)",
            }}
          />
          <Line type="monotone" dataKey="throughput" stroke="oklch(0.65 0.22 264)" strokeWidth={2} dot={false} />
          <Line
            type="monotone"
            dataKey="target"
            stroke="oklch(0.55 0.02 264)"
            strokeWidth={1}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
