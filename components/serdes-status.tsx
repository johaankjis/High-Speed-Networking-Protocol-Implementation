"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, Radio } from "lucide-react"

const serdesLanes = [
  { id: 0, status: "active", signalQuality: 98.5, bitErrors: 0 },
  { id: 1, status: "active", signalQuality: 99.1, bitErrors: 0 },
  { id: 2, status: "active", signalQuality: 97.8, bitErrors: 0 },
  { id: 3, status: "active", signalQuality: 98.9, bitErrors: 0 },
]

export function SerDesStatus() {
  return (
    <Card className="border-border bg-card p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">SerDes Lane Status</h3>
          <div className="mt-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-success" />
            <span className="text-lg font-semibold text-foreground">All Lanes Operational</span>
          </div>
        </div>
        <div className="rounded-lg bg-muted px-3 py-1.5">
          <span className="text-xs font-mono text-muted-foreground">4 × 25G GTY</span>
        </div>
      </div>

      <div className="space-y-4">
        {serdesLanes.map((lane) => (
          <div
            key={lane.id}
            className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-4"
          >
            <div className="flex items-center gap-3">
              <Radio className="h-4 w-4 text-success animate-pulse" />
              <div>
                <div className="text-sm font-medium text-foreground">Lane {lane.id}</div>
                <div className="text-xs text-muted-foreground">25 Gbps</div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Signal Quality</div>
                <div className="text-sm font-mono text-foreground">{lane.signalQuality}%</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Bit Errors</div>
                <div className="text-sm font-mono text-success">{lane.bitErrors}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
