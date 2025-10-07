import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  RefreshCw,
  Download,
  FlaskConical,
  Clock,
  Phone,
  User,
  MessageSquare,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const conversationDetail = {
  id: "conv_001",
  timestamp: "2024-01-16 14:23:15",
  phone: "+84 912 345 678",
  customerName: "Nguyen Van A",
  botName: "Customer Support Bot",
  botId: "bot_001",
  duration: "5:32",
  turnCount: 12,
  audioUrl: "/audio/conv_001.mp3",
  chatLog: [
    { speaker: "customer", time: "00:05", text: "Xin chào, tôi muốn hỏi về sản phẩm của các bạn" },
    {
      speaker: "bot",
      time: "00:08",
      text: "Xin chào! Tôi rất vui được hỗ trợ bạn. Bạn muốn tìm hiểu về sản phẩm nào ạ?",
    },
    { speaker: "customer", time: "00:15", text: "Tôi đang tìm tai nghe không dây model XYZ-100" },
    {
      speaker: "bot",
      time: "00:20",
      text: "Tai nghe XYZ-100 là một lựa chọn tuyệt vời! Hiện tại sản phẩm đang có sẵn trong kho. Giá là 3.500.000 VNĐ. Bạn có muốn đặt hàng không ạ?",
    },
    { speaker: "customer", time: "00:35", text: "Sản phẩm có bảo hành bao lâu?" },
    {
      speaker: "bot",
      time: "00:38",
      text: "Sản phẩm XYZ-100 được bảo hành 12 tháng chính hãng. Ngoài ra, bạn có thể mua thêm gói bảo hành mở rộng 24 tháng với giá 500.000 VNĐ.",
    },
    { speaker: "customer", time: "00:50", text: "Được, tôi muốn đặt một cái" },
    {
      speaker: "bot",
      time: "00:53",
      text: "Tuyệt vời! Để hoàn tất đơn hàng, tôi cần xác nhận một số thông tin. Bạn vui lòng cho tôi biết địa chỉ giao hàng được không ạ?",
    },
    { speaker: "customer", time: "01:05", text: "123 Đường Lê Lợi, Quận 1, TP.HCM" },
    {
      speaker: "bot",
      time: "01:10",
      text: "Cảm ơn bạn. Đơn hàng của bạn sẽ được giao trong vòng 2-3 ngày làm việc. Bạn có muốn thanh toán trực tuyến hay thanh toán khi nhận hàng?",
    },
    { speaker: "customer", time: "01:25", text: "Thanh toán khi nhận hàng" },
    {
      speaker: "bot",
      time: "01:28",
      text: "Đã ghi nhận. Đơn hàng của bạn đã được tạo thành công với mã đơn hàng #ORD-12345. Chúng tôi sẽ liên hệ với bạn để xác nhận trước khi giao hàng. Bạn còn cần hỗ trợ gì thêm không ạ?",
    },
  ],
  shortResult: {
    score: 92,
    passed: true,
    tags: ["greeting", "product_inquiry", "order_placed", "successful"],
    summary:
      "Customer asked about product availability and pricing. Bot provided accurate information, answered warranty questions, and successfully completed order placement.",
    sentiment: "positive",
  },
  fullResult: {
    sections: [
      {
        name: "Greeting & Opening",
        score: 95,
        passed: true,
        evidence: "Bot greeted customer appropriately and offered assistance immediately",
        weight: 10,
      },
      {
        name: "Intent Recognition",
        score: 90,
        passed: true,
        evidence: "Correctly identified product inquiry intent and asked clarifying questions",
        weight: 15,
      },
      {
        name: "Information Accuracy",
        score: 92,
        passed: true,
        evidence: "Provided accurate product information including price, availability, and warranty details",
        weight: 25,
      },
      {
        name: "Entity Extraction",
        score: 88,
        passed: true,
        evidence: "Successfully extracted product name, address, and payment method",
        weight: 15,
      },
      {
        name: "Conversation Flow",
        score: 94,
        passed: true,
        evidence: "Maintained natural conversation flow and guided customer through order process",
        weight: 15,
      },
      {
        name: "Call Closure",
        score: 90,
        passed: true,
        evidence: "Provided order confirmation and asked if customer needed additional help",
        weight: 10,
      },
      {
        name: "Policy Compliance",
        score: 95,
        passed: true,
        evidence: "Followed all company policies regarding pricing, warranty, and order confirmation",
        weight: 10,
      },
    ],
    timeline: [
      { time: "00:08", note: "Appropriate greeting and offer to help", type: "success" },
      { time: "00:20", note: "Accurate product information provided", type: "success" },
      { time: "00:38", note: "Warranty information correctly stated", type: "success" },
      { time: "01:10", note: "Order process initiated smoothly", type: "success" },
      { time: "01:28", note: "Order confirmation with reference number", type: "success" },
    ],
    riskFlags: [],
    improvements: [
      "Could have proactively mentioned shipping costs",
      "Could have offered related products or accessories",
      "Could have asked about newsletter subscription",
    ],
  },
  reviews: [
    {
      id: 1,
      reviewer: "Admin User",
      timestamp: "2024-01-16 15:00:00",
      passed: true,
      tags: ["excellent", "order_completed"],
      comment: "Excellent conversation. Bot handled the entire order process smoothly.",
    },
  ],
}

export default function ConversationDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/conversations">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Conversation Details</h1>
            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5" />
                {conversationDetail.customerName}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" />
                {conversationDetail.phone}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {conversationDetail.timestamp}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="h-3.5 w-3.5" />
                {conversationDetail.turnCount} turns
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Re-evaluate
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <FlaskConical className="mr-2 h-4 w-4" />
            Mark as Test Case
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-success">{conversationDetail.shortResult.score}</div>
            <p className="text-xs text-muted-foreground">Overall Score</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{conversationDetail.duration}</div>
            <p className="text-xs text-muted-foreground">Duration</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{conversationDetail.turnCount}</div>
            <p className="text-xs text-muted-foreground">Turn Count</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <Badge variant={conversationDetail.shortResult.passed ? "default" : "destructive"} className="text-sm">
              {conversationDetail.shortResult.passed ? "Passed" : "Failed"}
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">Status</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <Badge
              variant="outline"
              className={
                conversationDetail.shortResult.sentiment === "positive"
                  ? "border-success text-success"
                  : conversationDetail.shortResult.sentiment === "negative"
                    ? "border-destructive text-destructive"
                    : ""
              }
            >
              {conversationDetail.shortResult.sentiment}
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">Sentiment</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                Audio Recording
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Button size="icon" variant="outline">
                  <Play className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <SkipBack className="h-3.5 w-3.5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <SkipForward className="h-3.5 w-3.5" />
                </Button>
                <div className="flex-1">
                  <Progress value={33} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1:52</span>
                    <span>{conversationDetail.duration}</span>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  0.5x
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  1x
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  1.5x
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  2x
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Chat Log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {conversationDetail.chatLog.map((message, index) => (
                  <div key={index} className="flex gap-3">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                        message.speaker === "customer" ? "bg-primary/10 text-primary" : "bg-chart-1/10 text-chart-1"
                      }`}
                    >
                      {message.speaker === "customer" ? "C" : "B"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium">
                          {message.speaker === "customer" ? "Customer" : "Bot"}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">{message.time}</span>
                      </div>
                      <div
                        className={`rounded-lg p-3 text-sm ${
                          message.speaker === "customer" ? "bg-muted" : "bg-accent"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Short Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-success">{conversationDetail.shortResult.score}</div>
                  <div className="text-sm text-muted-foreground mt-1">Overall Score</div>
                </div>
                <Separator orientation="vertical" className="h-20" />
                <div className="flex-1 space-y-3">
                  <div>
                    <Badge
                      variant={conversationDetail.shortResult.passed ? "default" : "destructive"}
                      className="text-sm"
                    >
                      {conversationDetail.shortResult.passed ? "Passed" : "Failed"}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {conversationDetail.shortResult.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <div className="text-sm font-medium mb-2">Summary</div>
                <p className="text-sm text-muted-foreground">{conversationDetail.shortResult.summary}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Full Evaluation Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="sections">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="sections">Sections</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="improvements">Improvements</TabsTrigger>
                </TabsList>
                <TabsContent value="sections" className="space-y-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Section</TableHead>
                        <TableHead className="w-[80px]">Weight</TableHead>
                        <TableHead className="w-[80px]">Score</TableHead>
                        <TableHead className="w-[80px]">Status</TableHead>
                        <TableHead>Evidence</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {conversationDetail.fullResult.sections.map((section, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{section.name}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{section.weight}%</TableCell>
                          <TableCell>
                            <span
                              className={
                                section.score >= 80
                                  ? "text-success font-semibold"
                                  : section.score >= 60
                                    ? "text-warning font-semibold"
                                    : "text-destructive font-semibold"
                              }
                            >
                              {section.score}
                            </span>
                          </TableCell>
                          <TableCell>
                            {section.passed ? (
                              <CheckCircle2 className="h-4 w-4 text-success" />
                            ) : (
                              <XCircle className="h-4 w-4 text-destructive" />
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{section.evidence}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="timeline" className="space-y-3">
                  {conversationDetail.fullResult.timeline.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-16 font-mono text-sm text-muted-foreground">{item.time}</div>
                      <div
                        className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                          item.type === "success"
                            ? "bg-success"
                            : item.type === "warning"
                              ? "bg-warning"
                              : "bg-destructive"
                        }`}
                      />
                      <div className="flex-1 text-sm">{item.note}</div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="improvements" className="space-y-3">
                  {conversationDetail.fullResult.improvements.length > 0 ? (
                    <ul className="space-y-2">
                      {conversationDetail.fullResult.improvements.map((improvement, index) => (
                        <li key={index} className="flex gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">No improvements suggested</p>
                  )}
                  {conversationDetail.fullResult.riskFlags.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <div className="text-sm font-medium mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-destructive" />
                          Risk Flags
                        </div>
                        <ul className="space-y-2">
                          {conversationDetail.fullResult.riskFlags.map((flag: string, index: number) => (
                            <li key={index} className="flex gap-2 text-sm text-destructive">
                              <span>•</span>
                              <span>{flag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manual Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-transparent">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Mark as Passed
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <XCircle className="mr-2 h-4 w-4" />
                  Mark as Failed
                </Button>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Tags</label>
                <Input placeholder="Add tags (comma separated)..." />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Comments</label>
                <Textarea placeholder="Add your review comments..." className="min-h-[100px]" />
              </div>
              <Button className="w-full">Save Review</Button>

              {conversationDetail.reviews.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <div className="text-sm font-medium mb-3">Review History</div>
                    <div className="space-y-3">
                      {conversationDetail.reviews.map((review) => (
                        <div key={review.id} className="border rounded-lg p-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{review.reviewer}</span>
                            <span className="text-xs text-muted-foreground">{review.timestamp}</span>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant={review.passed ? "default" : "destructive"}>
                              {review.passed ? "Passed" : "Failed"}
                            </Badge>
                            {review.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
