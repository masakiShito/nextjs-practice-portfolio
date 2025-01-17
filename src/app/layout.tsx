// src/app/layout.tsx
import './globals.css'  // Tailwind CSSのインポートを追加
import { Header } from '@/app/components/layout/Header'
import { Sidebar } from '@/app/components/layout/Sidebar'

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <body>
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="pt-16 md:pl-64">
        {children}
      </main>
    </div>
    </body>
    </html>
  )
}