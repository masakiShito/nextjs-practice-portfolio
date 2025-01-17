export default function RecentTasks() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">最近のタスク</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border-b pb-2">
            <h3 className="font-medium">タスク{item}</h3>
            <p className="text-sm text-gray-500">期限: 2025/2/1</p>
          </div>
        ))}
      </div>
    </div>
  )
}