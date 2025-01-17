import React from 'react';
import { Menu, Plus, Sun, Moon, Settings } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="h-16 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold">タスク管理</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Sun size={24} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 p-4">
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Plus size={20} />
              <span>新規タスク</span>
            </button>
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">すべてのタスク</a>
              <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">今日のタスク</a>
              <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">重要</a>
              <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">完了済み</a>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">すべてのタスク</h2>
            <div className="space-y-4">
              {/* Sample tasks */}
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded"/>
                  <span>Next.jsの環境構築</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded"/>
                  <span>タスク管理アプリのUI設計</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded"/>
                  <span>データベース設計</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;