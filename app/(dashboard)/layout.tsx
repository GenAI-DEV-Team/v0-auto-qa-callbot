import type React from "react"
import { Sidebar } from "@/components/navigation/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 pl-16">{children}</main>
    </div>
  )
}
