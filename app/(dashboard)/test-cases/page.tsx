import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Play, Trash2, Edit, Eye, MoreHorizontal } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const testCases = [
  {
    id: 1,
    conversationId: "conv_001",
    botName: "Customer Support Bot",
    botId: "bot_001",
    expectedResult: "pass",
    expectedScore: 90,
    tags: ["greeting", "product_inquiry", "order_placement"],
    notes: "Standard product inquiry flow with successful order placement",
    dateAdded: "2024-01-15 10:30:00",
    addedBy: "Admin User",
    lastRun: "2024-01-16 14:30:00",
    lastResult: "pass",
    lastScore: 92,
    runCount: 5,
  },
  {
    id: 2,
    conversationId: "conv_045",
    botName: "Sales Bot",
    botId: "bot_002",
    expectedResult: "fail",
    expectedScore: 65,
    tags: ["edge_case", "authentication", "timeout"],
    notes: "Edge case: Customer authentication timeout scenario",
    dateAdded: "2024-01-14 15:20:00",
    addedBy: "QA Team",
    lastRun: "2024-01-16 14:30:00",
    lastResult: "fail",
    lastScore: 68,
    runCount: 3,
  },
  {
    id: 3,
    conversationId: "conv_089",
    botName: "Technical Support Bot",
    botId: "bot_003",
    expectedResult: "pass",
    expectedScore: 85,
    tags: ["troubleshooting", "technical_support", "resolved"],
    notes: "Complex troubleshooting scenario with successful resolution",
    dateAdded: "2024-01-13 09:15:00",
    addedBy: "Admin User",
    lastRun: "2024-01-15 16:45:00",
    lastResult: "pass",
    lastScore: 87,
    runCount: 8,
  },
  {
    id: 4,
    conversationId: "conv_112",
    botName: "Customer Support Bot",
    botId: "bot_001",
    expectedResult: "pass",
    expectedScore: 88,
    tags: ["billing", "refund", "policy_check"],
    notes: "Refund request following company policy",
    dateAdded: "2024-01-12 14:00:00",
    addedBy: "QA Team",
    lastRun: null,
    lastResult: null,
    lastScore: null,
    runCount: 0,
  },
  {
    id: 5,
    conversationId: "conv_156",
    botName: "Sales Bot",
    botId: "bot_002",
    expectedResult: "fail",
    expectedScore: 55,
    tags: ["edge_case", "missing_info", "escalation"],
    notes: "Missing customer information leading to escalation",
    dateAdded: "2024-01-11 11:30:00",
    addedBy: "Admin User",
    lastRun: "2024-01-16 14:30:00",
    lastResult: "fail",
    lastScore: 52,
    runCount: 4,
  },
]

export default function TestCasesPage() {
  return (
    <div className="flex flex-col gap-6 p-6 h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Test Cases</h1>
          <p className="text-muted-foreground">
            Manage E2E test cases for your bots • <span className="font-medium">{testCases.length} total</span> •{" "}
            <span className="text-success font-medium">
              {testCases.filter((tc) => tc.expectedResult === "pass").length} pass
            </span>{" "}
            •{" "}
            <span className="text-destructive font-medium">
              {testCases.filter((tc) => tc.expectedResult === "fail").length} fail
            </span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Test Case
          </Button>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Run All Tests
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{testCases.length}</div>
            <p className="text-xs text-muted-foreground">Total Test Cases</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-success">
              {testCases.filter((tc) => tc.expectedResult === "pass").length}
            </div>
            <p className="text-xs text-muted-foreground">Expected Pass</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-destructive">
              {testCases.filter((tc) => tc.expectedResult === "fail").length}
            </div>
            <p className="text-xs text-muted-foreground">Expected Fail</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{testCases.filter((tc) => tc.lastRun).length}</div>
            <p className="text-xs text-muted-foreground">Recently Run</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search by conversation ID, bot name, or tags..." className="pl-9" />
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
        <Select defaultValue="all-results">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Expected Result" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-results">All Results</SelectItem>
            <SelectItem value="pass">Expected Pass</SelectItem>
            <SelectItem value="fail">Expected Fail</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-status">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Run Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Status</SelectItem>
            <SelectItem value="run">Has Been Run</SelectItem>
            <SelectItem value="not-run">Not Run Yet</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="rounded-md border border-border overflow-hidden h-full">
          <div className="overflow-x-auto overflow-y-auto h-full">
            <Table>
              <TableHeader className="sticky top-0 bg-muted z-10">
                <TableRow>
                  <TableHead className="w-[140px]">Conversation ID</TableHead>
                  <TableHead className="w-[180px]">Bot</TableHead>
                  <TableHead className="w-[120px]">Expected Result</TableHead>
                  <TableHead className="w-[100px]">Expected Score</TableHead>
                  <TableHead className="w-[200px]">Tags</TableHead>
                  <TableHead className="min-w-[250px]">Notes</TableHead>
                  <TableHead className="w-[100px]">Last Result</TableHead>
                  <TableHead className="w-[80px]">Last Score</TableHead>
                  <TableHead className="w-[80px]">Run Count</TableHead>
                  <TableHead className="w-[150px]">Date Added</TableHead>
                  <TableHead className="w-[120px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testCases.map((testCase) => (
                  <TableRow key={testCase.id} className="hover:bg-muted/50">
                    <TableCell className="font-mono text-sm">{testCase.conversationId}</TableCell>
                    <TableCell className="text-sm">{testCase.botName}</TableCell>
                    <TableCell>
                      <Badge variant={testCase.expectedResult === "pass" ? "default" : "destructive"}>
                        {testCase.expectedResult === "pass" ? "Pass" : "Fail"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center font-medium">{testCase.expectedScore}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {testCase.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {testCase.tags.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{testCase.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{testCase.notes}</TableCell>
                    <TableCell>
                      {testCase.lastResult ? (
                        <Badge
                          variant={testCase.lastResult === "pass" ? "outline" : "outline"}
                          className={
                            testCase.lastResult === "pass"
                              ? "border-success text-success"
                              : "border-destructive text-destructive"
                          }
                        >
                          {testCase.lastResult}
                        </Badge>
                      ) : (
                        <span className="text-xs text-muted-foreground">Not run</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {testCase.lastScore ? (
                        <span
                          className={
                            testCase.lastScore >= 80
                              ? "text-success font-semibold"
                              : testCase.lastScore >= 60
                                ? "text-warning font-semibold"
                                : "text-destructive font-semibold"
                          }
                        >
                          {testCase.lastScore}
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center text-sm">{testCase.runCount}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      <div>{testCase.dateAdded.split(" ")[0]}</div>
                      <div className="text-muted-foreground/70">{testCase.addedBy}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" title="Run test">
                          <Play className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                          <Link href={`/conversations/${testCase.conversationId}`}>
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
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-3.5 w-3.5" />
                              Edit Test Case
                            </DropdownMenuItem>
                            <DropdownMenuItem>View Test History</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-3.5 w-3.5" />
                              Delete
                            </DropdownMenuItem>
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

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1-{testCases.length}</span> of{" "}
          <span className="font-medium">{testCases.length}</span> test cases
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
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
