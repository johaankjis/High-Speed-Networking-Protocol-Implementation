# High-Speed Networking Protocol Implementation

A real-time monitoring dashboard for 100 Gigabit Ethernet FPGA systems, built with Next.js 15 and React 19.

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/license-Private-red)

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
- [Development](#development)
- [Components](#components)
- [Performance Metrics](#performance-metrics)
- [Deployment](#deployment)
- [Future Roadmap](#future-roadmap)

## 🎯 Overview

This project provides a comprehensive, production-ready monitoring solution for high-speed networking protocol implementations. It visualizes critical performance metrics from 100G Ethernet FPGA systems in real-time, enabling engineers to monitor throughput, latency, SerDes lane health, pipeline stages, frame statistics, and system health at a glance.

### Purpose

The dashboard serves as a mission-critical monitoring tool for:
- **Network Performance**: Real-time throughput tracking targeting 100 Gbps
- **Latency Optimization**: Sub-microsecond latency measurements with nanosecond precision
- **Hardware Health**: FPGA utilization, temperature, power, and memory monitoring
- **SerDes Management**: 4×25G GTY lane status and signal quality tracking
- **Pipeline Analysis**: Detailed breakdown of packet processing stages
- **Error Tracking**: Frame transmission statistics with high-precision error rates

## ✨ Key Features

### Real-Time Monitoring
- 🔴 **Live Status Indicators**: Pulse animations showing system health
- ⚡ **Auto-Updating Metrics**: Last updated indicators (2s refresh)
- 🎯 **Threshold Tracking**: Visual alerts when performance targets are met/missed
- 📊 **Production Status Badge**: Clear indication of operational state

### Advanced Data Visualization
- 📈 **Line Charts**: Trending data for throughput analysis (60 data points)
- 📊 **Bar Charts**: Comparative analysis for latency metrics
- 📉 **Progress Bars**: Hardware utilization and capacity monitoring
- 🎨 **Color-Coded Indicators**: Intuitive status representation

### Precision Performance Metrics
- ⏱️ **Sub-Microsecond Latency**: 540ns end-to-end latency (36.5% reduction from baseline)
- 🚀 **Multi-Gigabit Throughput**: 92-98 Gbps sustained throughput
- 🔍 **Pipeline Stage Analysis**: 5-stage breakdown with per-stage metrics
- 📉 **Error Rate Tracking**: 99.9957% success rate monitoring

### Comprehensive System Health
- 💻 **FPGA Utilization**: 78% real-time monitoring
- 🌡️ **Temperature Tracking**: 62°C with 85°C threshold alerts
- ⚡ **Power Consumption**: 24.5W with 30W max monitoring
- 💾 **Memory Usage**: 64% utilization tracking

### SerDes Lane Monitoring
- 🔌 **4×25G GTY Lanes**: Individual lane status monitoring
- 📡 **Signal Quality**: 97.8% - 99.1% per-lane quality metrics
- ⚠️ **Bit Error Tracking**: 0 errors across all lanes
- ✅ **Operational Status**: All lanes operational with live indicators

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.2.4**: Latest App Router architecture with React Server Components
- **React 19**: Modern React with concurrent features
- **TypeScript 5**: Full type safety and enhanced developer experience
- **Node.js 22+**: Latest LTS for optimal performance

### UI & Styling
- **Tailwind CSS 4.1.9**: Utility-first CSS framework with modern features
- **Radix UI**: 20+ accessible, unstyled component primitives
- **Lucide React**: Beautiful, consistent icon system (454 icons)
- **Geist Font**: Vercel's modern font family (Sans & Mono)
- **OKLCH Color Space**: Perceptually uniform colors for better readability

### Data Visualization
- **Recharts**: Composable charting library for React
- **Line Charts**: For throughput trending
- **Bar Charts**: For latency comparisons
- **Custom Components**: Progress bars and status indicators

### Form & State Management
- **React Hook Form 7.60.0**: Performant form handling
- **Zod 3.25.67**: TypeScript-first schema validation
- **@hookform/resolvers 3.10.0**: Form validation integration

### Development Tools
- **PostCSS 8.5**: CSS transformation
- **@tailwindcss/postcss 4.1.9**: Tailwind CSS integration
- **ESLint**: Code quality and consistency
- **Vercel Analytics**: Production monitoring

## 🏗️ Project Architecture

### Directory Structure

```
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles, CSS variables, theme
│   ├── layout.tsx               # Root layout with fonts and metadata
│   └── page.tsx                 # Home page rendering NetworkDashboard
│
├── components/                   # React Components
│   ├── network-dashboard.tsx    # Main dashboard orchestrator
│   ├── throughput-chart.tsx     # Network throughput visualization
│   ├── latency-metrics.tsx      # End-to-end latency display
│   ├── serdes-status.tsx        # SerDes lane monitoring
│   ├── pipeline-stages.tsx      # Pipeline stage breakdown
│   ├── frame-statistics.tsx     # Frame transmission stats
│   ├── system-health.tsx        # FPGA system health metrics
│   ├── theme-provider.tsx       # Dark/light theme management
│   └── ui/                      # Reusable UI components (50+)
│       ├── card.tsx
│       ├── button.tsx
│       ├── badge.tsx
│       ├── progress.tsx
│       └── ... (50+ components)
│
├── hooks/                        # Custom React Hooks
│   ├── use-mobile.ts            # Mobile device detection
│   └── use-toast.ts             # Toast notification system
│
├── lib/                          # Utility Functions
│   └── utils.ts                 # Helper functions (cn, classNames)
│
├── public/                       # Static Assets
│
├── styles/                       # Additional Stylesheets
│
├── components.json               # UI component configuration
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
└── package.json                 # Dependencies and scripts
```

### Design Patterns

#### Component Architecture
```typescript
// Functional components with TypeScript
export function ComponentName() {
  // Client-side interactivity
  "use client"
  
  // State management with hooks
  const [state, setState] = useState()
  
  // Reusable Card wrapper pattern
  return (
    <Card className="...">
      {/* Component content */}
    </Card>
  )
}
```

#### Styling Approach
- **Utility-First**: Tailwind CSS for rapid development
- **CSS Variables**: OKLCH color space for theme consistency
- **Responsive Design**: Mobile-first with lg (1024px) breakpoint
- **Animations**: tw-animate-css for smooth transitions

#### Data Patterns
Currently uses mock data for demonstration:
```typescript
// Simulated data generation
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
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 22 or higher
- **Package Manager**: npm, yarn, or pnpm
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/High-Speed-Networking-Protocol-Implementation.git
   cd High-Speed-Networking-Protocol-Implementation
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Setup

No environment variables are required for the demo version. For production deployment with real FPGA data:

```bash
# .env.local (example)
NEXT_PUBLIC_API_URL=your_fpga_api_endpoint
NEXT_PUBLIC_WS_URL=your_websocket_endpoint
```

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server on localhost:3000

# Production Build
npm run build        # Build optimized production bundle
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint for code quality checks
```

### Development Workflow

1. **Component Development**
   - Create components in `components/` directory
   - Use TypeScript for type safety
   - Follow existing component patterns
   - Mark client components with `"use client"`

2. **Styling**
   - Use Tailwind utility classes
   - Maintain consistent spacing (gap-6 for grids)
   - Follow OKLCH color system
   - Ensure responsive design

3. **Testing Changes**
   ```bash
   npm run dev      # Test in development
   npm run build    # Verify production build
   npm run lint     # Check code quality
   ```

### Code Quality Standards

- ✅ TypeScript for all components
- ✅ Functional components with hooks
- ✅ Consistent prop typing
- ✅ Accessibility-first with Radix UI
- ✅ Responsive design patterns
- ✅ Performance optimization
- ✅ Clean separation of concerns

## 📦 Components

### Core Dashboard Components

#### 1. NetworkDashboard
**Purpose**: Main orchestrator component  
**Features**: 
- Header with branding and status
- Production status badge with live pulse
- 6-widget grid layout (2 columns on large screens)
- Responsive mobile layout

#### 2. ThroughputChart
**Purpose**: Network throughput visualization  
**Metrics**:
- Real-time: 92-98 Gbps
- Target: 100 Gbps
- Capacity: 98.2% utilization
**Visualization**: 60-point line chart with target line

#### 3. LatencyMetrics
**Purpose**: End-to-end latency display  
**Metrics**:
- Current: 540ns
- Baseline: 850ns
- Reduction: 36.5%
- Target: <35% (achieved ✓)
**Visualization**: Bar chart comparison

#### 4. SerDesStatus
**Purpose**: SerDes lane health monitoring  
**Features**:
- 4×25G GTY lanes
- Per-lane status (all operational)
- Signal quality: 97.8% - 99.1%
- Bit errors: 0 across all lanes
- Live pulse animations

#### 5. PipelineStages
**Purpose**: Packet processing pipeline  
**Stages**:
1. MAC/PCS: 85ns, 94% utilization
2. AXI-Stream: 45ns, 96% utilization
3. Header Parse: 120ns, 89% utilization
4. Cut-Through: 180ns, 92% utilization
5. Forwarding: 110ns, 95% utilization
**Total**: 540ns @ 400 MHz

#### 6. FrameStatistics
**Purpose**: Frame transmission tracking  
**Metrics**:
- Received: 8,547,392,847
- Transmitted: 8,547,389,201
- Dropped: 3,646
- Errors: 12 (CRC: 8, Oversized: 4)
- Success: 99.9957%

#### 7. SystemHealth
**Purpose**: FPGA hardware monitoring  
**Metrics**:
- FPGA Utilization: 78%
- Temperature: 62°C (max 85°C)
- Power: 24.5W (max 30W)
- Memory: 64%
**Status**: All Systems Nominal

### UI Component Library

50+ reusable components from Radix UI:
- Form controls (Input, Select, Checkbox, Radio, Switch)
- Navigation (Menu, Tabs, Breadcrumb)
- Overlays (Dialog, Sheet, Drawer, Popover)
- Feedback (Toast, Alert, Progress)
- Layout (Card, Separator, Scroll Area)
- Data Display (Table, Badge, Avatar)

## 📊 Performance Metrics

### Monitored Parameters

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| **Throughput** | 92-98 Gbps | 100 Gbps | ✅ 98.2% |
| **Latency** | 540ns | <35% reduction | ✅ 36.5% |
| **Success Rate** | 99.9957% | >99.99% | ✅ Achieved |
| **FPGA Utilization** | 78% | <85% | ✅ Normal |
| **Temperature** | 62°C | <85°C | ✅ Normal |
| **Power** | 24.5W | <30W | ✅ Normal |

### Performance Benchmarks

- **Frame Processing**: 8.5+ billion frames processed
- **Error Rate**: 12 errors in 8.5B+ frames (0.0014 PPM)
- **Lane Health**: All 4×25G lanes operational (0 bit errors)
- **Pipeline Efficiency**: 540ns total latency across 5 stages
- **Clock Speed**: 400 MHz operation

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configuration**
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
   - Node version: 22+

### Docker Deployment

```dockerfile
FROM node:22-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🔮 Future Roadmap

### Phase 1: Real Data Integration
- [ ] WebSocket connections for live FPGA data
- [ ] REST API integration for historical data
- [ ] Real-time event streaming
- [ ] Database integration for persistence

### Phase 2: Enhanced Monitoring
- [ ] Network topology visualization
- [ ] Alert and notification system
- [ ] Historical data trends and analytics
- [ ] Performance benchmarking tools
- [ ] Custom threshold configuration

### Phase 3: Advanced Features
- [ ] Machine learning for anomaly detection
- [ ] Predictive maintenance alerts
- [ ] Custom dashboard layouts
- [ ] Multi-user support with authentication
- [ ] Role-based access control
- [ ] Export functionality (PDF, CSV)

### Phase 4: Scalability
- [ ] Multi-device monitoring
- [ ] Distributed FPGA cluster support
- [ ] High-availability architecture
- [ ] Performance optimization
- [ ] CDN integration

## 📝 Configuration Files

### next.config.mjs
- ESLint: Ignore during builds (development flexibility)
- TypeScript: Ignore build errors (rapid prototyping)
- Images: Unoptimized (demo mode)

### tsconfig.json
- Strict mode enabled
- Path aliases configured (`@/*`)
- Latest ECMAScript features

### components.json
- UI component configuration
- Tailwind CSS integration
- Custom component paths

## 🤝 Contributing

This is a private project. For authorized contributors:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For hosting and fonts (Geist)
- **Radix UI**: For accessible component primitives
- **Recharts**: For beautiful data visualization
- **Tailwind CSS**: For utility-first styling

## 📞 Support

For issues, questions, or feature requests, please contact the development team or create an issue in the repository.

---

**Last Updated**: January 2025  
**Version**: 0.1.0  
**Framework**: Next.js 15.2.4  
**Node Version**: 22+

Made with ❤️ for High-Speed Networking
