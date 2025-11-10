"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Home, BookOpen, Clipboard, TrendingUp, Lightbulb, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/units", label: "Units", icon: BookOpen },
    { href: "/practice", label: "Practice", icon: Clipboard },
    { href: "/diagnostic", label: "Diagnostic", icon: TrendingUp },
    { href: "/progress", label: "Progress", icon: BarChart3 },
    { href: "/formulas", label: "Formulas", icon: Lightbulb },
  ]

  return (
    <nav className="border-b border-border bg-card">
      <div className="flex h-16 items-center justify-between px-6 gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AP Stats Pro
          </span>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={cn("gap-2", isActive && "bg-primary text-primary-foreground hover:bg-primary/90")}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              </Link>
            )
          })}
        </div>

        {/* Start Test Button */}
        <Button
          className="gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 flex-shrink-0"
          size="sm"
        >
          <Play className="w-4 h-4" />
          <span className="hidden sm:inline">Start Test</span>
        </Button>
      </div>
    </nav>
  )
}
