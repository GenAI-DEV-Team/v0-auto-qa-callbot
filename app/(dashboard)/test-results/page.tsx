"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight, Download, Eye, CheckCircle2, XCircle } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

const testRuns = [
  {
    id: 1,
    runId: "run_001",
    botName: "Customer Support Bot",
    botId: "bot_001",
    date: "2024-01-16 10:30:00",
    totalCases: 15,
    passed: 13,
    failed: 2,
    successRate: 86.7,
    duration: "2m 34s",
    status: "completed",
    triggeredBy: "Admin User",
    results: [
      {
        conversationId: "conv_001",
        expected: "pass",
        actual: "pass",
        match: true,
        expectedScore: 90,
        actualScore: 92,
        scoreDiff: 2,
      },
      {
        conversationId: "conv_112",
        expected: "pass",
        actual: "pass",
        match: true,
        expectedScore: 88,
        actualScore: 89,
        scoreDiff: 1,
      },
      {
        conversationId: "conv_045",
        expected: "fail",
        actual: "pass",
        match: false,
        expectedScore: 65,
        actualScore: 78,
        scoreDiff: 13,
      },
      {
        conversationId: "conv_156",
        expected: "fail",
        actual: "fail",
        match: true,
        expectedScore: 55,
        actualScore: 52,
        scoreDiff: -3,
      },
    ],
  },
  {
    id: 2,
    runId: "run_002",
    botName: "Sales Bot",
    botId: "bot_002",
    date: "2024-01-15 15:45:00",
    totalCases: 12,
    passed: 10,
    failed: 2,
    successRate: 83.3,
    duration: "1m 58s",
    status: "completed",
    triggeredBy: "QA Team",
    results: [
      {
        conversationId: "conv_045",
        expected: "fail",
        actual: "fail",
        match: true,
        expectedScore: 65,
        actualScore: 68,
        scoreDiff: 3,
      },
      {
        conversationId: "conv_156",
        expected: "fail",
        actual: "pass",
        match: false,
        expectedScore: 55,
        actualScore: 72,
        scoreDiff: 17,
      },
    ],
  },
  {
    id: 3,
    runId: "run_003",
    botName: "Technical Support Bot",
    botId: "bot_003",
    date: "2024-01-15 09:20:00",
    totalCases: 8,
    passed: 7,
    failed: 1,
    successRate: 87.5,
    duration: "1m 42s",
    status: "completed",
    triggeredBy: "Admin User",
    results: [
      {
        conversationId: "conv_089",
        expected: "pass",
        actual: "pass",
        match: true,
        expectedScore: 85,
        actualScore: 87,
        scoreDiff: 2,
      },
    ],
  },
]

export default function TestResultsPage() {
  const [expandedRun, setExpandedRun] = useState<number | null>(null)

  const totalRuns = testRuns.length
  const avgSuccessRate = (testRuns.reduce((sum, run) => sum + run.successRate, 0) / totalRuns).toFixed(1)
  const totalTestCases = testRuns.reduce((sum, run) => sum + run.totalCases, 0)
  const totalPassed = testRuns.reduce((sum, run) => sum + run.passed, 0)

  return (
    <div className="flex flex-col gap-6 p-6 h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Test Results</h1>
          <p className="text-muted-foreground">
            View E2E test execution results • <span className="font-medium">{totalRuns} runs</span> •{" "}
            <span className="font-medium">{avgSuccessRate}% avg success rate</span>
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{totalRuns}</div>
            <p className="text-xs text-muted-foreground">Total Test Runs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{totalTestCases}</div>
            <p className="text-xs text-muted-foreground">Total Test Cases</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-success">{totalPassed}</div>
            <p className="text-xs text-muted-foreground">Tests Passed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{avgSuccessRate}%</div>
            <p className="text-xs text-muted-foreground">Avg Success Rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
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
        <Select defaultValue="all-time">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-time">All Time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-status">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="rounded-md border border-border overflow-hidden h-full">
          <div className="overflow-x-auto overflow-y-auto h-full">
            <Table>
              <TableHeader className="sticky top-0 bg-muted z-10">
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead className="w-[120px]">Run ID</TableHead>
                  <TableHead className="w-[180px]">Bot</TableHead>
                  <TableHead className="w-[150px]">Date</TableHead>
                  <TableHead className="w-[100px]">Total Cases</TableHead>
                  <TableHead className="w-[80px]">Passed</TableHead>
                  <TableHead className="w-[80px]">Failed</TableHead>
                  <TableHead className="w-[120px]">Success Rate</TableHead>
                  <TableHead className="w-[100px]">Duration</TableHead>
                  <TableHead className="w-[120px]">Triggered By</TableHead>
                  <TableHead className="w-[100px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testRuns.map((run) => (
                  <>
                    <TableRow
                      key={run.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => setExpandedRun(expandedRun === run.id ? null : run.id)}
                    >
                      <TableCell>
                        {expandedRun === run.id ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </TableCell>
                      <TableCell className="font-mono text-sm">{run.runId}</TableCell>
                      <TableCell className="text-sm">{run.botName}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{run.date}</TableCell>
                      <TableCell className="text-center font-medium">{run.totalCases}</TableCell>
                      <TableCell className="text-center text-success font-medium">{run.passed}</TableCell>
                      <TableCell className="text-center text-destructive font-medium">{run.failed}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <Badge variant={run.successRate >= 85 ? "default" : "secondary"}>{run.successRate}%</Badge>
                          <Progress value={run.successRate} className="h-1" />
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{run.duration}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{run.triggeredBy}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            run.status === "completed"
                              ? "default"
                              : run.status === "running"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {run.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                    {expandedRun === run.id && (
                      <TableRow>
                        <TableCell colSpan={11} className="bg-muted/30 p-0">
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold text-lg">Individual Test Results</h4>
                              <div className="flex gap-4 text-sm">
                                <span className="flex items-center gap-1">
                                  <CheckCircle2 className="h-4 w-4 text-success" />
                                  <span className="text-muted-foreground">
                                    {run.results.filter((r) => r.match).length} matched
                                  </span>
                                </span>
                                <span className="flex items-center gap-1">
                                  <XCircle className="h-4 w-4 text-destructive" />
                                  <span className="text-muted-foreground">
                                    {run.results.filter((r) => !r.match).length} mismatched
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="rounded-md border border-border">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Conversation ID</TableHead>
                                    <TableHead>Expected Result</TableHead>
                                    <TableHead>Actual Result</TableHead>
                                    <TableHead>Match</TableHead>
                                    <TableHead>Expected Score</TableHead>
                                    <TableHead>Actual Score</TableHead>
                                    <TableHead>Score Diff</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {run.results.map((result, idx) => (
                                    <TableRow key={idx}>
                                      <TableCell className="font-mono text-sm">{result.conversationId}</TableCell>
                                      <TableCell>
                                        <Badge variant={result.expected === "pass" ? "default" : "destructive"}>
                                          {result.expected}
                                        </Badge>
                                      </TableCell>
                                      <TableCell>
                                        <Badge variant={result.actual === "pass" ? "default" : "destructive"}>
                                          {result.actual}
                                        </Badge>
                                      </TableCell>
                                      <TableCell>
                                        {result.match ? (
                                          <div className="flex items-center gap-1 text-success">
                                            <CheckCircle2 className="h-4 w-4" />
                                            <span className="text-sm font-medium">Match</span>
                                          </div>
                                        ) : (
                                          <div className="flex items-center gap-1 text-destructive">
                                            <XCircle className="h-4 w-4" />
                                            <span className="text-sm font-medium">Mismatch</span>
                                          </div>
                                        )}
                                      </TableCell>
                                      <TableCell className="text-center font-medium">{result.expectedScore}</TableCell>
                                      <TableCell className="text-center">
                                        <span
                                          className={
                                            result.actualScore >= 80
                                              ? "text-success font-semibold"
                                              : result.actualScore >= 60
                                                ? "text-warning font-semibold"
                                                : "text-destructive font-semibold"
                                          }
                                        >
                                          {result.actualScore}
                                        </span>
                                      </TableCell>
                                      <TableCell className="text-center">
                                        <span
                                          className={
                                            result.scoreDiff > 0
                                              ? "text-success font-medium"
                                              : result.scoreDiff < 0
                                                ? "text-destructive font-medium"
                                                : "text-muted-foreground"
                                          }
                                        >
                                          {result.scoreDiff > 0 ? "+" : ""}
                                          {result.scoreDiff}
                                        </span>
                                      </TableCell>
                                      <TableCell className="text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                                          <Link href={`/conversations/${result.conversationId}`}>
                                            <Eye className="h-3.5 w-3.5" />
                                          </Link>
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1-{testRuns.length}</span> of{" "}
          <span className="font-medium">{testRuns.length}</span> test runs
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
