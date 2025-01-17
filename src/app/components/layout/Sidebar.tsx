'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, FolderKanban, ListTodo, Calendar, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    name: 'ダッシュボード',
    href: '/',
    icon: LayoutDashboard
  },
  {
    name: 'プロジェクト',
    href: '/projects',
    icon: FolderKanban
  },
  {
    name: 'タスク',
    href: '/tasks',
    icon: ListTodo
  },
  {
    name: 'カレンダー',
    href: '/calendar',
    icon: Calendar
  }
]

const bottomNavigationItems = [
  {
    name: '設定',
    href: '/settings',
    icon: Settings
  }
]

export const Sidebar = () => {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/dashboard' && pathname === '/') return true
    return pathname.startsWith(href)
  }

  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r bg-white">
      <div className="flex flex-col h-full">
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors',
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t">
          {bottomNavigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors',
                isActive(item.href)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}