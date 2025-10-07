import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Search, Plus, Eye, RefreshCw, Phone, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data
const bots = [
  {
    id: 1,
    name: "Customer Support Bot",
    hotline: "+84 123 456 789",
    version: "v2.3.1",
    kbStatus: "extracted",
    lastUpdated: "2024-01-15 14:30",
    totalCalls: 1245,
    passRate: 89.2,
  },
  {
    id: 2,
    name: "Sales Bot",
    hotline: "+84 987 654 321",
    version: "v1.8.0",
    kbStatus: "outdated",
    lastUpdated: "2024-01-10 09:15",
    totalCalls: 856,
    passRate: 76.5,
  },
  {
    id: 3,
    name: "Technical Support Bot",
    hotline: "+84 555 123 456",
    version: "v3.0.2",
    kbStatus: "extracted",
    lastUpdated: "2024-01-16 11:20",
    totalCalls: 2103,
    passRate: 92.1,
  },
]

export default function BotsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Bots</h1>
          <p className="text-muted-foreground">Manage your AI callbots and knowledge bases</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Bot
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search bots..." className="pl-9" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="KB Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="extracted">Extracted</SelectItem>
            <SelectItem value="outdated">Outdated</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bots.map((bot) => (
          <Card key={bot.id} className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg leading-tight mb-2">{bot.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3.5 w-3.5" />
                    <span className="font-mono">{bot.hotline}</span>
                  </div>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {bot.version}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">KB Status</span>
                <Badge
                  variant={
                    bot.kbStatus === "extracted" ? "default" : bot.kbStatus === "outdated" ? "secondary" : "destructive"
                  }
                >
                  {bot.kbStatus}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Calls</span>
                <span className="font-semibold">{bot.totalCalls.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pass Rate</span>
                <div className="flex items-center gap-1.5">
                  <TrendingUp
                    className={`h-3.5 w-3.5 ${
                      bot.passRate >= 85 ? "text-success" : bot.passRate >= 70 ? "text-warning" : "text-destructive"
                    }`}
                  />
                  <span
                    className={`font-semibold ${
                      bot.passRate >= 85 ? "text-success" : bot.passRate >= 70 ? "text-warning" : "text-destructive"
                    }`}
                  >
                    {bot.passRate}%
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-border">
                <span className="text-xs text-muted-foreground">Last updated: {bot.lastUpdated}</span>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 pt-4">
              <Button variant="outline" className="flex-1 bg-transparent" asChild>
                <Link href={`/bots/${bot.id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1-3</span> of <span className="font-medium">3</span> bots
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="10">
            <SelectTrigger className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 / page</SelectItem>
              <SelectItem value="25">25 / page</SelectItem>
              <SelectItem value="50">50 / page</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
