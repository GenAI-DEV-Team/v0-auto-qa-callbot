import { MetricCard } from "@/components/dashboard/metric-card"
import { CallsOverTimeChart } from "@/components/dashboard/calls-over-time-chart"
import { PassRateChart } from "@/components/dashboard/pass-rate-chart"
import { FailureReasonsChart } from "@/components/dashboard/failure-reasons-chart"
import { Phone, CheckCircle2, XCircle, TrendingUp } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data
const callsData = [
  { date: "Mon", calls: 245, passed: 198, failed: 47 },
  { date: "Tue", calls: 312, passed: 256, failed: 56 },
  { date: "Wed", calls: 289, passed: 241, failed: 48 },
  { date: "Thu", calls: 356, passed: 298, failed: 58 },
  { date: "Fri", calls: 401, passed: 334, failed: 67 },
  { date: "Sat", calls: 198, passed: 165, failed: 33 },
  { date: "Sun", calls: 167, passed: 139, failed: 28 },
]

const failureData = [
  { reason: "Missing information", count: 45, percentage: 27 },
  { reason: "Incorrect authentication", count: 38, percentage: 23 },
  { reason: "Poor call quality", count: 32, percentage: 19 },
  { reason: "Timeout", count: 28, percentage: 17 },
  { reason: "Wrong intent", count: 24, percentage: 14 },
]

const botComparisonData = [
  { bot: "Customer Support", calls: 856, passed: 724, failed: 132, passRate: 84.6 },
  { bot: "Sales Bot", calls: 645, passed: 516, failed: 129, passRate: 80.0 },
  { bot: "Technical Support", calls: 467, passed: 334, failed: 133, passRate: 71.5 },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your callbot performance</p>
        </div>
        <Tabs defaultValue="7d">
          <TabsList>
            <TabsTrigger value="7d">7 Days</TabsTrigger>
            <TabsTrigger value="4w">4 Weeks</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Calls"
          value="1,968"
          change={12.5}
          changeLabel="vs last period"
          icon={<Phone className="h-4 w-4" />}
        />
        <MetricCard
          title="Passed"
          value="1,574"
          change={8.2}
          changeLabel="vs last period"
          icon={<CheckCircle2 className="h-4 w-4" />}
        />
        <MetricCard
          title="Failed"
          value="394"
          change={-3.1}
          changeLabel="vs last period"
          icon={<XCircle className="h-4 w-4" />}
        />
        <MetricCard
          title="Evaluation Coverage"
          value="87.3%"
          change={5.4}
          changeLabel="vs last period"
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-4 md:grid-cols-2">
        <CallsOverTimeChart data={callsData} />
        <PassRateChart passed={1574} failed={394} />
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-4 md:grid-cols-2">
        <FailureReasonsChart data={failureData} />
        <Card>
          <CardHeader>
            <CardTitle>Bot Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {botComparisonData.map((bot) => (
                <div key={bot.bot} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{bot.bot}</span>
                    <span className="text-muted-foreground">
                      {bot.passed}/{bot.calls} ({bot.passRate}%)
                    </span>
                  </div>
                  <Progress value={bot.passRate} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
