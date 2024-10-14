"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { MessageSquare, Languages, BookOpen, FilePresentation, Image } from 'lucide-react'

const sidebarItems = [
  { name: '对话', icon: MessageSquare, href: '/' },
  { name: '翻译', icon: Languages, href: '/translate' },
  { name: '知识库', icon: BookOpen, href: '/knowledge' },
  { name: 'PPT制作', icon: FilePresentation, href: '/ppt' },
  { name: '图片生成', icon: Image, href: '/image' },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  const pathname = usePathname()

  return (
    <aside className={cn(
      "bg-gray-100 dark:bg-gray-800 h-screen transition-all duration-300 ease-in-out",
      expanded ? "w-64" : "w-20"
    )}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <h1 className={cn(
            "text-xl font-bold transition-opacity duration-300",
            expanded ? "opacity-100" : "opacity-0"
          )}>
            三菱动力AI
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setExpanded(!expanded)}
            className="hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {expanded ? '«' : '»'}
          </Button>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 p-4">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} passHref>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      pathname === item.href && "bg-gray-200 dark:bg-gray-700"
                    )}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    <span className={cn(
                      "transition-opacity duration-300",
                      expanded ? "opacity-100" : "opacity-0"
                    )}>
                      {item.name}
                    </span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}