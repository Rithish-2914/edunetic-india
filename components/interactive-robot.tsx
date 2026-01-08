"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { motion } from "framer-motion"
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setLoading(false), 8000)
    return () => clearTimeout(timer)
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
    <div className="relative w-full h-[500px] flex items-center justify-center cursor-pointer group z-[100]">
      <Script 
        src="https://unpkg.com/@splinetool/viewer@1.12.29/build/spline-viewer.js"
        type="module"
        strategy="afterInteractive"
      />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-full h-full relative group min-h-[500px] flex items-center justify-center">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#05080A]/80 backdrop-blur-md z-[110] rounded-3xl border border-cyan-500/20">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-[#00E5D4] border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(0,229,212,0.5)]" />
                  <p className="text-cyan-400 font-mono text-xs animate-pulse">CONNECTING_TO_ROBOT_CORE...</p>
                </div>
              </div>
            )}
            
            {/* Using a highly reliable public Spline scene for cursor tracking robot */}
            <spline-viewer 
              url="https://prod.spline.design/q0C05YF9Ww-4wO7p/scene.splinecode"
              className="w-full h-full block"
              onLoad={() => setLoading(false)}
            ></spline-viewer>
            
            <div className="absolute inset-0 z-[120] bg-transparent" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-[#05080A]/95 backdrop-blur-xl border-cyan-500/20 text-white shadow-[0_0_30px_rgba(0,229,212,0.1)] z-[200]">
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
      
      <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" />
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
