export function UpcomingDeadlines() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">期限が近いタスク</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">重要タスク{item}</h3>
              <p className="text-sm text-gray-500">残り3日</p>
            </div>
            <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">期限近し</span>
          </div>
        ))}
      </div>
    </div>
  )
}