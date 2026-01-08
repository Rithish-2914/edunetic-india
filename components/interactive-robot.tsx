"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
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
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const robotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const relX = (e.clientX - centerX) / (window.innerWidth / 2)
        const relY = (e.clientY - centerY) / (window.innerHeight / 2)
        
        mouseX.set(relX)
        mouseY.set(relY)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const springConfig = { damping: 25, stiffness: 200 }
  
  // Head rotation
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-20, 20]), springConfig)
  
  // Eye movement
  const eyeX = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), springConfig)
  const eyeY = useSpring(useTransform(mouseY, [-1, 1], [-6, 6]), springConfig)

  const menuItems = [
    { label: "Home", icon: <Home className="w-4 h-4 mr-2" />, path: "/" },
    { label: "Courses", icon: <BookOpen className="w-4 h-4 mr-2" />, path: "/courses" },
    { label: "About Us", icon: <Info className="w-4 h-4 mr-2" />, path: "#about" },
    { label: "Team", icon: <Users className="w-4 h-4 mr-2" />, path: "#team" },
    { label: "Contact", icon: <Mail className="w-4 h-4 mr-2" />, path: "#contact" },
  ]

  return (
    <div ref={robotRef} className="relative w-72 h-72 flex items-center justify-center cursor-pointer perspective-1000 z-20">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div 
            style={{ rotateX, rotateY }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative preserve-3d"
          >
            <div className="relative">
              <img 
                src="/robot.png" 
                alt="AI Robot Assistant" 
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
              
              <div className="absolute top-[34%] left-[28%] w-[44%] h-[18%] flex justify-around pointer-events-none">
                <div className="relative w-full h-full flex justify-around items-center">
                  <div className="w-6 h-6 bg-[#05080A] rounded-full flex items-center justify-center overflow-hidden border border-cyan-500/30">
                     <motion.div 
                      style={{ x: eyeX, y: eyeY }}
                      className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"
                    />
                  </div>
                  <div className="w-6 h-6 bg-[#05080A] rounded-full flex items-center justify-center overflow-hidden border border-cyan-500/30">
                    <motion.div 
                      style={{ x: eyeX, y: eyeY }}
                      className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
               style={{ x: useTransform(mouseX, [-1, 1], [20, -20]), y: useTransform(mouseY, [-1, 1], [20, -20]) }}
               className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse" 
            />
          </motion.div>
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
      
      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  )
}
