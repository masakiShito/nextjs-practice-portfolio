// src/components/dashboard/StatusOverview.tsx
import { BarChart2, TrendingUp } from 'lucide-react'

type TaskStats = {
  [key: string]: {
    count: number
    percentage: number
  }
}

const STATUS_COLORS = {
  TODO: 'bg-blue-500',
  IN_PROGRESS: 'bg-amber-500',
  DONE: 'bg-green-500'
}

const STATUS_LABELS = {
  TODO: '未着手',
  IN_PROGRESS: '進行中',
  DONE: '完了'
}

export default function StatusOverview({
                                         stats,
                                         totalTasks
                                       }: {
  stats: TaskStats
  totalTasks: number
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">ステータス概要</h2>
        <BarChart2 className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        {Object.entries(stats).map(([status, data]) => (
          <div key={status}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">
                {STATUS_LABELS[status as keyof typeof STATUS_LABELS]}
              </span>
              <span className="text-sm text-gray-500">{data.count} タスク</span>
            </div>
            <div className="relative">
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`${STATUS_COLORS[status as keyof typeof STATUS_COLORS]} h-2 rounded-full transition-all duration-500 ease-out`}
                  style={{width: `${data.percentage}%`}}
                ></div>
              </div>
              <span className="absolute right-0 top-2.5 text-sm text-gray-500 bg-white px-1">
                {data.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">総タスク数</span>
          <div className="flex items-center text-blue-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="font-medium">{totalTasks}</span>
          </div>
        </div>
      </div>
    </div>
  )
}