// src/app/page.tsx
import { Suspense } from 'react'
import { StatusOverview } from '@/components/dashboard/StatusOverview'
import RecentTasks from '@/components/dashboard/RecentTasks'
import { UpcomingDeadlines } from '@/components/dashboard/UpcomingDeadlines'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function DashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ダッシュボード</h1>
        <div className="flex gap-2">
          <select className="px-3 py-2 border rounded-lg">
            <option value="all">全てのプロジェクト</option>
            <option value="project-a">プロジェクトA</option>
            <option value="project-b">プロジェクトB</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<div className="h-48 bg-gray-100 rounded-lg animate-pulse" />}>
          <RecentTasks />
        </Suspense>

        <Suspense fallback={<div className="h-48 bg-gray-100 rounded-lg animate-pulse" />}>
          <StatusOverview />
        </Suspense>

        <Suspense fallback={<div className="h-48 bg-gray-100 rounded-lg animate-pulse" />}>
          <UpcomingDeadlines />
        </Suspense>
      </div>
    </div>
  )
}