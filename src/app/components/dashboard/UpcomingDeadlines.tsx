// src/components/dashboard/UpcomingDeadlines.tsx
import { AlertCircle } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { ja } from 'date-fns/locale/ja'

type Task = {
  id: string
  title: string
  endDate: Date
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
  category: {
    name: string
    color: string
  } | null
}

export default function UpcomingDeadlines({ tasks }: { tasks: Task[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">期限が近いタスク</h2>
        <AlertCircle className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {formatDistanceToNow(new Date(task.endDate), {
                    locale: ja,
                    addSuffix: true
                  })}
                </p>
                {task.category && (
                  <div className="mt-2 flex items-center text-sm">
                    <span
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: task.category.color }}
                    ></span>
                    {task.category.name}
                  </div>
                )}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium
                ${task.priority === 'HIGH' ? 'bg-red-100 text-red-800' :
                task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'}`}>
                {task.priority === 'HIGH' ? '最優先' :
                  task.priority === 'MEDIUM' ? '通常' : '低'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-900">{tasks.length}</span> 件のタスクが期限間近です
        </div>
      </div>
    </div>
  )
}