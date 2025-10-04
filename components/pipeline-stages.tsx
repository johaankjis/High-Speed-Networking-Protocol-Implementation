"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const pipelineStages = [
  { name: "MAC/PCS", latency: 85, utilization: 94 },
  { name: "AXI-Stream", latency: 45, utilization: 96 },
  { name: "Header Parse", latency: 120, utilization: 89 },
  { name: "Cut-Through", latency: 180, utilization: 92 },
  { name: "Forwarding", latency: 110, utilization: 95 },
]

export function PipelineStages() {
  const totalLatency = pipelineStages.reduce((sum, stage) => sum + stage.latency, 0)

  return (
    <Card className="border-border bg-card p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Pipeline Stages</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold text-foreground font-mono">{totalLatency}</span>
            <span className="text-lg text-muted-foreground">ns total</span>
          </div>
        </div>
        <div className="rounded-lg bg-muted px-3 py-1.5">
          <span className="text-xs font-mono text-muted-foreground">400 MHz Clock</span>
        </div>
      </div>

      <div className="space-y-3">
        {pipelineStages.map((stage, index) => (
          <div key={stage.name}>
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-xs font-mono text-primary">
                  {index + 1}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{stage.name}</div>
                  <div className="text-xs text-muted-foreground">{stage.latency}ns latency</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Utilization</div>
                  <div className="text-sm font-mono text-foreground">{stage.utilization}%</div>
                </div>
                {index < pipelineStages.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
