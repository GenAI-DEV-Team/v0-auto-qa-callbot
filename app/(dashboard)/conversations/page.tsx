"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Play, Eye, Download, FlaskConical, Filter, Calendar, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const conversations = [
  {
    id: "conv_001",
    timestamp: "2024-01-16 14:23:15",
    phone: "+84 912 345 678",
    customerName: "Nguyen Van A",
    botName: "Customer Support Bot",
    botId: "bot_001",
    duration: "5:32",
    turnCount: 12,
    score: 92,
    passed: true,
    tags: ["greeting", "product_inquiry", "successful"],
    summary:
      "Customer asked about product availability and pricing. Bot provided accurate information and offered assistance.",
    failReasons: [],
    evaluatedAt: "2024-01-16 14:30:00",
    evaluatedBy: "GPT-4",
    hasAudio: true,
    sentiment: "positive",
  },
  {
    id: "conv_002",
    timestamp: "2024-01-16 14:18:42",
    phone: "+84 987 654 321",
    customerName: "Tran Thi B",
    botName: "Sales Bot",
    botId: "bot_002",
    duration: "3:45",
    turnCount: 8,
    score: 68,
    passed: false,
    tags: ["complaint", "billing", "escalation"],
    summary: "Customer complained about incorrect billing. Bot failed to provide satisfactory resolution.",
    failReasons: ["Missing information", "Incorrect authentication"],
    evaluatedAt: "2024-01-16 14:25:00",
    evaluatedBy: "GPT-4",
    hasAudio: true,
    sentiment: "negative",
  },
  {
    id: "conv_003",
    timestamp: "2024-01-16 14:15:30",
    phone: "+84 555 123 456",
    customerName: "Le Van C",
    botName: "Technical Support Bot",
    botId: "bot_003",
    duration: "8:12",
    turnCount: 18,
    score: 85,
    passed: true,
    tags: ["technical_support", "troubleshooting", "resolved"],
    summary: "Helped customer resolve connection issues. Provided step-by-step guidance successfully.",
    failReasons: [],
    evaluatedAt: "2024-01-16 14:28:00",
    evaluatedBy: "GPT-4",
    hasAudio: true,
    sentiment: "neutral",
  },
  {
    id: "conv_004",
    timestamp: "2024-01-16 14:10:15",
    phone: "+84 333 777 888",
    customerName: "Pham Thi D",
    botName: "Customer Support Bot",
    botId: "bot_001",
    duration: "2:18",
    turnCount: 6,
    score: 45,
    passed: false,
    tags: ["greeting", "timeout"],
    summary: "Call ended prematurely due to timeout. Customer did not receive adequate support.",
    failReasons: ["Timeout", "Poor call quality"],
    evaluatedAt: "2024-01-16 14:15:00",
    evaluatedBy: "GPT-4",
    hasAudio: true,
    sentiment: "negative",
  },
  {
    id: "conv_005",
    timestamp: "2024-01-16 14:05:22",
    phone: "+84 999 111 222",
    customerName: "Hoang Van E",
    botName: "Sales Bot",
    botId: "bot_002",
    duration: "6:45",
    turnCount: 15,
    score: 78,
    passed: true,
    tags: ["product_inquiry", "pricing", "order_placed"],
    summary: "Customer inquired about multiple products. Bot provided detailed information and customer placed order.",
    failReasons: [],
    evaluatedAt: "2024-01-16 14:12:00",
    evaluatedBy: "GPT-4",
    hasAudio: true,
    sentiment: "positive",
  },
]

export default function ConversationsPage() {
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({})
  const [selectedCount, setSelectedCount] = useState(3)

  // Mock total count - in real app this would come from API based on filters
  const totalConversations = 156
  const filteredConversations = 156

  return (
    <div className="flex h-screen flex-col">
      <div className="flex-none border-b border-border bg-background p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Conversations</h1>
            <p className="text-muted-foreground">
              View and analyze callbot conversations •{" "}
              <span className="font-medium">
                {filteredConversations} of {totalConversations} conversations
              </span>{" "}
              • <span className="text-success font-medium">124 passed</span> •{" "}
              <span className="text-destructive font-medium">32 failed</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Selected
            </Button>
            <Button variant="outline">
              <FlaskConical className="mr-2 h-4 w-4" />
              Mark as Test Cases
            </Button>
            <Button>Evaluate Selected</Button>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by phone, customer name, or conversation ID..." className="pl-9" />
          </div>
          <Select defaultValue="all-bots">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Bot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-bots">All Bots</SelectItem>
              <SelectItem value="bot-1">Customer Support Bot</SelectItem>
              <SelectItem value="bot-2">Sales Bot</SelectItem>
              <SelectItem value="bot-3">Technical Support Bot</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-status">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">All Status</SelectItem>
              <SelectItem value="passed">Passed</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="not-evaluated">Not Evaluated</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[280px] justify-start text-left font-normal bg-transparent">
                <Calendar className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {dateRange.from.toLocaleDateString()} - {dateRange.to.toLocaleDateString()}
                    </>
                  ) : (
                    dateRange.from.toLocaleDateString()
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label>Start Date & Time</Label>
                  <div className="flex gap-2">
                    <Input type="date" className="flex-1" />
                    <Input type="time" className="w-[120px]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>End Date & Time</Label>
                  <div className="flex gap-2">
                    <Input type="date" className="flex-1" />
                    <Input type="time" className="w-[120px]" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Clear
                  </Button>
                  <Button size="sm" className="flex-1">
                    Apply
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Quick filters:</span>
          <Button variant="outline" size="sm" className="h-7 bg-transparent">
            Today
          </Button>
          <Button variant="outline" size="sm" className="h-7 bg-transparent">
            Last 7 days
          </Button>
          <Button variant="outline" size="sm" className="h-7 bg-transparent">
            Failed only
          </Button>
          <Button variant="outline" size="sm" className="h-7 bg-transparent">
            Not evaluated
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6">
        <div className="rounded-md border border-border mt-6 overflow-hidden">
          <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-400px)]">
            <Table>
              <TableHeader className="sticky top-0 bg-muted z-10">
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead className="w-[160px]">Timestamp</TableHead>
                  <TableHead className="w-[140px]">Phone</TableHead>
                  <TableHead className="w-[150px]">Customer</TableHead>
                  <TableHead className="w-[180px]">Bot</TableHead>
                  <TableHead className="w-[80px]">Duration</TableHead>
                  <TableHead className="w-[70px]">Turns</TableHead>
                  <TableHead className="w-[70px]">Score</TableHead>
                  <TableHead className="w-[90px]">Status</TableHead>
                  <TableHead className="w-[100px]">Sentiment</TableHead>
                  <TableHead className="w-[200px]">Tags</TableHead>
                  <TableHead className="min-w-[300px]">Summary</TableHead>
                  <TableHead className="w-[150px]">Evaluated</TableHead>
                  <TableHead className="w-[120px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {conversations.map((conv) => (
                  <TableRow key={conv.id} className="hover:bg-muted/50">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-mono text-xs">{conv.timestamp}</TableCell>
                    <TableCell className="font-mono text-xs">{conv.phone}</TableCell>
                    <TableCell className="text-sm">{conv.customerName}</TableCell>
                    <TableCell className="text-sm">{conv.botName}</TableCell>
                    <TableCell className="font-mono text-xs">{conv.duration}</TableCell>
                    <TableCell className="text-center text-sm">{conv.turnCount}</TableCell>
                    <TableCell>
                      <span
                        className={
                          conv.score >= 80
                            ? "text-success font-semibold"
                            : conv.score >= 60
                              ? "text-warning font-semibold"
                              : "text-destructive font-semibold"
                        }
                      >
                        {conv.score}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={conv.passed ? "default" : "destructive"} className="font-medium">
                        {conv.passed ? "Passed" : "Failed"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          conv.sentiment === "positive"
                            ? "border-success text-success"
                            : conv.sentiment === "negative"
                              ? "border-destructive text-destructive"
                              : "border-muted-foreground text-muted-foreground"
                        }
                      >
                        {conv.sentiment}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {conv.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {conv.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{conv.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {conv.summary}
                      {conv.failReasons.length > 0 && (
                        <div className="mt-1 text-xs text-destructive">Fail reasons: {conv.failReasons.join(", ")}</div>
                      )}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      <div>{conv.evaluatedAt}</div>
                      <div className="text-muted-foreground/70">{conv.evaluatedBy}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        {conv.hasAudio && (
                          <Button variant="ghost" size="icon" className="h-8 w-8" title="Play audio">
                            <Play className="h-3.5 w-3.5" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                          <Link href={`/conversations/${conv.id}`}>
                            <Eye className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-3.5 w-3.5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Re-evaluate</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Test Case</DropdownMenuItem>
                            <DropdownMenuItem>Export</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <div className="flex-none border-t border-border bg-background p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1-5</span> of{" "}
              <span className="font-medium">{filteredConversations}</span> conversations
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">{selectedCount}</span> selected
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="25">
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 / page</SelectItem>
                <SelectItem value="25">25 / page</SelectItem>
                <SelectItem value="50">50 / page</SelectItem>
                <SelectItem value="100">100 / page</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <div className="flex gap-1">
              <Button variant="default" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <span className="flex items-center px-2">...</span>
              <Button variant="outline" size="sm">
                7
              </Button>
            </div>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
