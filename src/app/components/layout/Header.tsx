'use client'

import { Search, PlusCircle, Menu, Bell } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Button } from '@/app/components/ui/Button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from '@/app/components/ui/Sheet'
import { cn } from '@/lib/utils'
import { Sidebar } from './Sidebar'

export const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const handleNewTask = useCallback(() => {
    // TODO: 新規タスク作成モーダルを開く
  }, [])

  return (
    <header className="h-16 border-b bg-white fixed top-0 left-0 right-0 z-50">
      <div className="h-full px-4 flex items-center justify-between gap-4 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <Sidebar />
            </SheetContent>
          </Sheet>

          <h1 className="text-xl font-semibold">TaskFlow</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className={cn(
            'hidden md:flex items-center h-10 w-64 rounded-lg border transition-all',
            isSearchFocused && 'ring-2 ring-blue-500 border-transparent'
          )}>
            <Search className="h-4 w-4 text-gray-400 mx-3" />
            <input
              type="text"
              placeholder="タスクを検索..."
              className="flex-1 outline-none text-sm"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>

          <Button
            variant="default"
            size="sm"
            className="hidden md:flex items-center gap-2"
            onClick={handleNewTask}
          >
            <PlusCircle className="h-4 w-4" />
            新規タスク
          </Button>
        </div>
      </div>
    </header>
  )
}