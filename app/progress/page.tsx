
"use client"



"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Target, Flame, Clock } from "lucide-react"


export default function ProgressPage() {
  // Sample data
  const unitProgress = [
    { unit: "Unit 1", progress: 75 },
    { unit: "Unit 2", progress: 45 },
    { unit: "Unit 3", progress: 30 },
    { unit: "Unit 4", progress: 0 },
    { unit: "Unit 5", progress: 0 },
    { unit: "Unit 6", progress: 0 },
    { unit: "Unit 7", progress: 0 },
    { unit: "Unit 8", progress: 0 },
    { unit: "Unit 9", progress: 0 },
  ]

  const studyTrend = [
    { date: "Mon", hours: 2.5, score: 72 },
    { date: "Tue", hours: 3, score: 75 },
    { date: "Wed", hours: 1.5, score: 70 },
    { date: "Thu", hours: 2.8, score: 78 },
    { date: "Fri", hours: 3.2, score: 82 },
    { date: "Sat", hours: 4, score: 85 },
    { date: "Sun", hours: 2.2, score: 80 },
  ]

  const performanceByCategory = [
    { name: "Strong", value: 4, fill: "#ec4899" },
    { name: "Adequate", value: 2, fill: "#a855f7" },
    { name: "Needs Work", value: 3, fill: "#0ea5e9" },
  ]

  const stats = [
    {
      label: "Overall Progress",
      value: "33%",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      label: "Study Streak",
      value: "7 days",
      icon: Flame,
      color: "text-orange-500",
    },
    {
      label: "Total Study Time",
      value: "21.2 hrs",
      icon: Clock,
      color: "text-blue-500",
    },
    {
      label: "Average Score",
      value: "76.7%",
      icon: Target,
      color: "text-green-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Your Progress</h1>
          <p className="text-muted-foreground">Track your learning journey and performance metrics</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <Card key={i} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </Card>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Unit Progress */}
          <Card className="lg:col-span-2 p-6">
            <h2 className="text-xl font-bold mb-6">Progress by Unit</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={unitProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="unit" stroke="var(--muted-foreground)" style={{ fontSize: "12px" }} />
                <YAxis stroke="var(--muted-foreground)" style={{ fontSize: "12px" }} />
                <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
                <Bar dataKey="progress" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--secondary)" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Performance Category */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Topics by Performance</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={performanceByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {performanceByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Study Trend */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Study Trend & Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={studyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="date" stroke="var(--muted-foreground)" />
              <YAxis yAxisId="left" stroke="var(--muted-foreground)" />
              <YAxis yAxisId="right" orientation="right" stroke="var(--muted-foreground)" />
              <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="hours"
                stroke="var(--primary)"
                strokeWidth={2}
                name="Study Hours"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="score"
                stroke="var(--secondary)"
                strokeWidth={2}
                name="Practice Score %"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Detailed Unit Stats */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Detailed Unit Progress</h2>
          <div className="space-y-4">
            {unitProgress.map((unit, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{unit.unit}</span>
                  <span className="text-sm font-semibold text-muted-foreground">{unit.progress}%</span>
                </div>
                <Progress value={unit.progress} className="h-2" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
