import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    // プロジェクトIDをクエリパラメータから取得
    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get('projectId')

    // 最近のタスクを取得（上位5件）
    const recentTasks = await prisma.task.findMany({
      where: {
        projectId: projectId || undefined,
      },
      orderBy: {
        updatedAt: 'desc'
      },
      take: 5,
      include: {
        category: true,
      }
    })

    // タスクの状態ごとの集計
    const taskStats = await prisma.task.groupBy({
      by: ['status'],
      where: {
        projectId: projectId || undefined,
      },
      _count: {
        id: true
      }
    })

    // 期限が近いタスク（未完了のもののみ）
    const upcomingDeadlines = await prisma.task.findMany({
      where: {
        projectId: projectId || undefined,
        status: {
          not: 'DONE'
        },
        endDate: {
          gte: new Date(),
          lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 1週間以内
        }
      },
      orderBy: {
        endDate: 'asc'
      },
      take: 5,
      include: {
        category: true,
      }
    })

    // プロジェクト一覧
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: 'asc'
      }
    })

    // 統計情報を計算
    const totalTasks = taskStats.reduce((acc, curr) => acc + curr._count.id, 0)
    const statusPercentages = taskStats.reduce((acc, curr) => {
      acc[curr.status] = {
        count: curr._count.id,
        percentage: Math.round((curr._count.id / totalTasks) * 100)
      }
      return acc
    }, {} as Record<string, { count: number; percentage: number }>)

    return NextResponse.json({
      recentTasks,
      taskStats: statusPercentages,
      upcomingDeadlines,
      projects,
      totalTasks
    })
  } catch (error) {
    console.error('Dashboard API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}