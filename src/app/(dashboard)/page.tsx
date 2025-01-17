import { Suspense } from 'react'
import { ChevronDown } from 'lucide-react'
import StatusOverview from '@/app/components/dashboard/StatusOverview'
import RecentTasks from '@/app/components/dashboard/RecentTasks'
import UpcomingDeadlines from '@/app/components/dashboard/UpcomingDeadlines'

// データフェッチング関数
async function getDashboardData(projectId?: string) {
  const url = new URL('/api/dashboard', process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000')
  if (projectId) {
    url.searchParams.set('projectId', projectId)
  }

  const res = await fetch(url, { next: { revalidate: 0 } })
  if (!res.ok) throw new Error('Failed to fetch dashboard data')

  return res.json()
}

export default async function DashboardPage({
                                              searchParams
                                            }: {
  searchParams: { projectId?: string }
}) {
  const data = await getDashboardData(searchParams.projectId)

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ダッシュボード</h1>
          <p className="text-gray-500 mt-1">今日のタスクと進捗状況を確認しましょう</p>
        </div>
        <div className="relative inline-block">
          <select
            className="appearance-none bg-white pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg text-gray-700 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors cursor-pointer"
            defaultValue={searchParams.projectId || 'all'}
          >
            <option value="all">全てのプロジェクト</option>
            {data.projects.map((project: { id: string; name: string }) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<div className="h-[400px] bg-gray-100 rounded-xl animate-pulse" />}>
          <RecentTasks tasks={data.recentTasks} />
        </Suspense>

        <Suspense fallback={<div className="h-[400px] bg-gray-100 rounded-xl animate-pulse" />}>
          <StatusOverview stats={data.taskStats} totalTasks={data.totalTasks} />
        </Suspense>

        <Suspense fallback={<div className="h-[400px] bg-gray-100 rounded-xl animate-pulse" />}>
          <UpcomingDeadlines tasks={data.upcomingDeadlines} />
        </Suspense>
      </div>
    </div>
  )
}