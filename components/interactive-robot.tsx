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
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const robotRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

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

  const springConfig = { damping: 20, stiffness: 150 }
  const eyeX = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), springConfig)
  const eyeY = useSpring(useTransform(mouseY, [-1, 1], [-5, 5]), springConfig)

  const menuItems = [
    { label: "Home", icon: <Home className="w-4 h-4 mr-2" />, path: "/" },
    { label: "Courses", icon: <BookOpen className="w-4 h-4 mr-2" />, path: "/courses" },
    { label: "About Us", icon: <Info className="w-4 h-4 mr-2" />, path: "#about" },
    { label: "Team", icon: <Users className="w-4 h-4 mr-2" />, path: "#team" },
    { label: "Contact", icon: <Mail className="w-4 h-4 mr-2" />, path: "#contact" },
  ]

  return (
    <div ref={robotRef} className="relative w-64 h-64 flex items-center justify-center cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <img 
              src="/robot.png" 
              alt="AI Robot Assistant" 
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
            
            <div className="absolute top-[35%] left-[30%] w-[40%] h-[15%] flex justify-around pointer-events-none">
              <motion.div 
                style={{ x: eyeX, y: eyeY }}
                className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
              />
              <motion.div 
                style={{ x: eyeX, y: eyeY }}
                className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
              />
            </div>
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-background/95 backdrop-blur-md border-primary/20">
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
              className="cursor-pointer hover:bg-primary/10"
            >
              {item.icon}
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
    </div>
  )
}
