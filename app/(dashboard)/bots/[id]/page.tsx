import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { RefreshCw, Save, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { MetricCard } from "@/components/dashboard/metric-card"
import { Phone, CheckCircle2, XCircle } from "lucide-react"

export default function BotDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/bots">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Customer Support Bot</h1>
            <p className="text-muted-foreground">+84 123 456 789 • v2.3.1</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Re-extract KB
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="knowledge-base">Knowledge Base</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="tests">E2E Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bot Information</CardTitle>
              <CardDescription>Basic information about this bot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Bot Name</div>
                  <div className="font-medium">Customer Support Bot</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Hotline</div>
                  <div className="font-mono">+84 123 456 789</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Version</div>
                  <Badge variant="outline">v2.3.1</Badge>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">KB Status</div>
                  <Badge>Extracted</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Prompt</CardTitle>
              <CardDescription>The system prompt used by this bot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md bg-muted p-4 font-mono text-sm">
                You are a helpful customer support assistant. Your goal is to assist customers with their inquiries...
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge-base" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Goals</CardTitle>
              <CardDescription>What the bot aims to achieve</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter bot goals..."
                className="min-h-[100px]"
                defaultValue="Provide excellent customer support and resolve issues efficiently"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intents</CardTitle>
              <CardDescription>Recognized user intents</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter intents..."
                className="min-h-[100px]"
                defaultValue="greeting, product_inquiry, complaint, technical_support, billing"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Entities</CardTitle>
              <CardDescription>Key entities the bot should recognize</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter entities..."
                className="min-h-[100px]"
                defaultValue="customer_name, order_id, product_name, phone_number, email"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="statistics" className="space-y-6">
          <div className="flex justify-end">
            <Tabs defaultValue="7d">
              <TabsList>
                <TabsTrigger value="7d">7 Days</TabsTrigger>
                <TabsTrigger value="4w">4 Weeks</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard
              title="Total Calls"
              value="1,245"
              change={15.2}
              changeLabel="vs last period"
              icon={<Phone className="h-4 w-4" />}
            />
            <MetricCard
              title="Passed"
              value="1,111"
              change={12.1}
              changeLabel="vs last period"
              icon={<CheckCircle2 className="h-4 w-4" />}
            />
            <MetricCard
              title="Failed"
              value="134"
              change={-5.3}
              changeLabel="vs last period"
              icon={<XCircle className="h-4 w-4" />}
            />
          </div>
        </TabsContent>

        <TabsContent value="conversations">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                Conversation list filtered to this bot will appear here
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tests">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">E2E test cases for this bot will appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
