"use client"
import { ThroughputChart } from "@/components/throughput-chart"
import { LatencyMetrics } from "@/components/latency-metrics"
import { SerDesStatus } from "@/components/serdes-status"
import { PipelineStages } from "@/components/pipeline-stages"
import { FrameStatistics } from "@/components/frame-statistics"
import { SystemHealth } from "@/components/system-health"
import { Zap } from "lucide-react"

export function NetworkDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">High-Speed Networking Protocol</h1>
                <p className="text-sm text-muted-foreground">100G Ethernet FPGA Monitor</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-lg bg-success/10 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-success">Production</span>
              </div>
              <div className="rounded-lg bg-muted px-3 py-1.5">
                <span className="text-sm font-mono text-muted-foreground">Last updated: 2s ago</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto flex-1 px-6 py-6">
        <div className="grid gap-6">
          {/* Top Row - Throughput and Latency */}
          <div className="grid gap-6 lg:grid-cols-2">
            <ThroughputChart />
            <LatencyMetrics />
          </div>

          {/* Middle Row - SerDes and Pipeline */}
          <div className="grid gap-6 lg:grid-cols-2">
            <SerDesStatus />
            <PipelineStages />
          </div>

          {/* Bottom Row - Frame Stats and System Health */}
          <div className="grid gap-6 lg:grid-cols-2">
            <FrameStatistics />
            <SystemHealth />
          </div>
        </div>
      </div>
    </div>
  )
}
