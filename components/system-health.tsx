"use client"

import { Card } from "@/components/ui/card"
import { Cpu, Thermometer, Zap, HardDrive } from "lucide-react"

const systemMetrics = {
  fpgaUtilization: 78,
  temperature: 62,
  powerConsumption: 24.5,
  memoryUsage: 64,
}

export function SystemHealth() {
  return (
    <Card className="border-border bg-card p-6">
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground">System Health</h3>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-lg font-semibold text-foreground">All Systems Nominal</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="flex items-center gap-2 text-primary">
            <Cpu className="h-4 w-4" />
            <span className="text-xs font-medium">FPGA Utilization</span>
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-2xl font-mono text-foreground">{systemMetrics.fpgaUtilization}</span>
            <span className="text-sm text-muted-foreground">%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-primary transition-all" style={{ width: `${systemMetrics.fpgaUtilization}%` }} />
          </div>
        </div>

        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="flex items-center gap-2 text-warning">
            <Thermometer className="h-4 w-4" />
            <span className="text-xs font-medium">Temperature</span>
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-2xl font-mono text-foreground">{systemMetrics.temperature}</span>
            <span className="text-sm text-muted-foreground">°C</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-warning transition-all"
              style={{ width: `${(systemMetrics.temperature / 85) * 100}%` }}
            />
          </div>
        </div>

        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="flex items-center gap-2 text-accent">
            <Zap className="h-4 w-4" />
            <span className="text-xs font-medium">Power Draw</span>
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-2xl font-mono text-foreground">{systemMetrics.powerConsumption}</span>
            <span className="text-sm text-muted-foreground">W</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">Within spec (max 30W)</div>
        </div>

        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="flex items-center gap-2 text-chart-3">
            <HardDrive className="h-4 w-4" />
            <span className="text-xs font-medium">Memory Usage</span>
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-2xl font-mono text-foreground">{systemMetrics.memoryUsage}</span>
            <span className="text-sm text-muted-foreground">%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-chart-3 transition-all" style={{ width: `${systemMetrics.memoryUsage}%` }} />
          </div>
        </div>
      </div>
    </Card>
  )
}
