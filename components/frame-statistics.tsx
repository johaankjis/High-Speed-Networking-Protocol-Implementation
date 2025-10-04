"use client"

import { Card } from "@/components/ui/card"
import { Activity, AlertCircle, CheckCircle2, XCircle } from "lucide-react"

const frameStats = {
  received: 8_547_392_847,
  transmitted: 8_547_389_201,
  dropped: 3_646,
  errors: 12,
  crcErrors: 8,
  oversized: 4,
}

export function FrameStatistics() {
  const successRate = (
    ((frameStats.received - frameStats.dropped - frameStats.errors) / frameStats.received) *
    100
  ).toFixed(4)

  return (
    <Card className="border-border bg-card p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Frame Statistics</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-semibold text-foreground font-mono">{successRate}</span>
            <span className="text-lg text-muted-foreground">% success</span>
          </div>
        </div>
        <Activity className="h-5 w-5 text-primary" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="flex items-center gap-2 text-success">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-xs font-medium">Received</span>
          </div>
          <div className="mt-2 text-xl font-mono text-foreground">{frameStats.received.toLocaleString()}</div>
        </div>

        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-xs font-medium">Transmitted</span>
          </div>
          <div className="mt-2 text-xl font-mono text-foreground">{frameStats.transmitted.toLocaleString()}</div>
        </div>

        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="flex items-center gap-2 text-warning">
            <AlertCircle className="h-4 w-4" />
            <span className="text-xs font-medium">Dropped</span>
          </div>
          <div className="mt-2 text-xl font-mono text-foreground">{frameStats.dropped.toLocaleString()}</div>
        </div>

        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="flex items-center gap-2 text-destructive">
            <XCircle className="h-4 w-4" />
            <span className="text-xs font-medium">Errors</span>
          </div>
          <div className="mt-2 text-xl font-mono text-foreground">{frameStats.errors.toLocaleString()}</div>
        </div>
      </div>

      <div className="mt-4 space-y-2 rounded-lg border border-border bg-secondary/30 p-3">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">CRC Errors</span>
          <span className="font-mono text-foreground">{frameStats.crcErrors}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Oversized Frames</span>
          <span className="font-mono text-foreground">{frameStats.oversized}</span>
        </div>
      </div>
    </Card>
  )
}
