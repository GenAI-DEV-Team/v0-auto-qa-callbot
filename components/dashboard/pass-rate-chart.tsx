"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

interface PassRateChartProps {
  passed: number
  failed: number
}

export function PassRateChart({ passed, failed }: PassRateChartProps) {
  const data = [
    { name: "Passed", value: passed, color: "hsl(var(--success))" },
    { name: "Failed", value: failed, color: "hsl(var(--destructive))" },
  ]

  const total = passed + failed
  const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pass Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <ResponsiveContainer width="50%" height={200}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-3xl font-bold">{passRate}%</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-success" />
                <span className="text-sm">Passed: {passed}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive" />
                <span className="text-sm">Failed: {failed}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
