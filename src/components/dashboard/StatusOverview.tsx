export function StatusOverview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">ステータス概要</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span>未着手</span>
            <span>30%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>進行中</span>
            <span>45%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>完了</span>
            <span>25%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}