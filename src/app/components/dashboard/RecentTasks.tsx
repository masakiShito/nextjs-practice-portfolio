// src/components/dashboard/RecentTasks.tsx
import { Calendar, Clock, CheckCircle } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { ja } from 'date-fns/locale/ja'

type Task = {
  id: string
  title: string
  status: 'TODO' | 'IN_PROGRESS' | 'DONE'
  endDate: Date
  category: {
    name: string
    color: string
  } | null
}

export default function RecentTasks({ tasks }: { tasks: Task[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">最近のタスク</h2>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{task.title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatDistanceToNow(new Date(task.endDate), { locale: ja, addSuffix: true })}
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${task.status === 'DONE' ? 'bg-green-100 text-green-800' :
                    task.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'}`}>
                    {task.status === 'DONE' ? '完了' :
                      task.status === 'IN_PROGRESS' ? '進行中' : '未着手'}
                  </span>
                </div>
              </div>
            </div>
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
        ))}
      </div>

      <button className="mt-4 w-full py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
        すべてのタスクを表示 →
      </button>
    </div>
  )
}