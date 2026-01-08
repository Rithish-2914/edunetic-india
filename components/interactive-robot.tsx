"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { motion, AnimatePresence } from "framer-motion"
import { Home, BookOpen, Info, Users, Mail } from "lucide-react"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export function InteractiveRobot() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { label: "Home", icon: <Home className="w-4 h-4 mr-2" />, path: "/" },
    { label: "Courses", icon: <BookOpen className="w-4 h-4 mr-2" />, path: "/courses" },
    { label: "About Us", icon: <Info className="w-4 h-4 mr-2" />, path: "#about" },
    { label: "Team", icon: <Users className="w-4 h-4 mr-2" />, path: "#team" },
    { label: "Contact", icon: <Mail className="w-4 h-4 mr-2" />, path: "#contact" },
  ]

  if (!mounted) return <div className="w-full h-[500px]" />

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center cursor-pointer group z-20">
      <Script 
        src="https://unpkg.com/@splinetool/viewer@1.12.29/build/spline-viewer.js"
        type="module"
        strategy="afterInteractive"
      />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-full h-full relative group">
            <spline-viewer 
              url="https://prod.spline.design/nUfX-O7V5Ew-WnL7/scene.splinecode"
              className="w-full h-full"
              loading="eager"
            ></spline-viewer>
            
            {/* Clickable Overlay for Dropdown Trigger - ensure it covers the area */}
            <div className="absolute inset-0 z-30" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-[#05080A]/95 backdrop-blur-xl border-cyan-500/20 text-white shadow-[0_0_30px_rgba(0,229,212,0.1)] z-[100]">
          {menuItems.map((item) => (
            <DropdownMenuItem 
              key={item.label}
              onClick={() => {
                if (item.path.startsWith("#")) {
                  const el = document.getElementById(item.path.slice(1))
                  el?.scrollIntoView({ behavior: 'smooth' })
                } else {
                  router.push(item.path)
                }
              }}
              className="cursor-pointer hover:bg-cyan-500/10 focus:bg-cyan-500/20 transition-colors py-3"
            >
              {item.icon}
              <span className="font-bold">{item.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />
    </div>
  )
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}
