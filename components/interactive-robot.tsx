"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Home, BookOpen, Info, Users, Mail } from "lucide-react"
import { useRouter } from "next/navigation"

export function InteractiveRobot() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Spring configurations for smooth movement
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  // Transformations for 3D effect
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])
  const eyeX = useTransform(mouseX, [-300, 300], [-5, 5])
  const eyeY = useTransform(mouseY, [-300, 300], [-3, 3])

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const menuItems = [
    { label: "Home", icon: <Home className="w-4 h-4 mr-2" />, path: "/" },
    { label: "Courses", icon: <BookOpen className="w-4 h-4 mr-2" />, path: "/courses" },
    { label: "About Us", icon: <Info className="w-4 h-4 mr-2" />, path: "#about" },
    { label: "Team", icon: <Users className="w-4 h-4 mr-2" />, path: "#team" },
    { label: "Contact", icon: <Mail className="w-4 h-4 mr-2" />, path: "#contact" },
  ]

  if (!mounted) return <div className="w-64 h-64" />

  return (
    <div ref={containerRef} className="relative w-72 h-80 flex items-center justify-center perspective-[1000px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-48 h-64 flex flex-col items-center justify-center cursor-pointer group"
          >
            {/* Antenna */}
            <div className="absolute top-[-10px] w-1 h-6 bg-gray-400 rounded-full">
              <motion.div 
                animate={{ scale: [1, 1.3, 1], backgroundColor: ["#00E5D4", "#FF00E5", "#00E5D4"] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-[-4px] left-[-3px] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#00E5D4]" 
              />
            </div>

            {/* Head */}
            <div className="w-28 h-24 bg-white rounded-[2rem] border-4 border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
              {/* Screen/Face */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-12 bg-gray-900 rounded-2xl flex items-center justify-center gap-4">
                {/* Eyes */}
                <motion.div style={{ x: eyeX, y: eyeY }} className="flex gap-4">
                  <motion.div 
                    animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
                    className="relative w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_8px_#00E5D4]"
                  >
                     <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
                  </motion.div>
                  <motion.div 
                    animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
                    className="relative w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_8px_#00E5D4]"
                  >
                     <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
                  </motion.div>
                </motion.div>
              </div>
              {/* Blush */}
              <div className="absolute bottom-4 left-6 w-3 h-1.5 bg-pink-300 rounded-full blur-[1px]" />
              <div className="absolute bottom-4 right-6 w-3 h-1.5 bg-pink-300 rounded-full blur-[1px]" />
            </div>

            {/* Neck */}
            <div className="w-6 h-3 bg-gray-200 -mt-1 rounded-full z-10" />

            {/* Body */}
            <div className="w-32 h-28 bg-white rounded-[2.5rem] border-4 border-gray-100 shadow-2xl relative -mt-1">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem]" />
              
              {/* Hands */}
              <motion.div 
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-4 top-4 w-5 h-14 bg-white border-4 border-gray-100 rounded-full origin-top" 
              />
              <motion.div 
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                className="absolute -right-4 top-4 w-5 h-14 bg-white border-4 border-gray-100 rounded-full origin-top" 
              />
              
              {/* Chest Detail */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center border-2 border-cyan-100">
                <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00E5D4]" />
              </div>
            </div>

            {/* Legs */}
            <div className="flex gap-8 -mt-2">
              <motion.div 
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-10 bg-white border-4 border-gray-100 rounded-full" 
              />
              <motion.div 
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                className="w-5 h-10 bg-white border-4 border-gray-100 rounded-full" 
              />
            </div>

            {/* Click Indicator */}
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-8 text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20"
            >
              Click Me
            </motion.div>

            {/* Hovering shadow */}
            <motion.div 
              animate={{ scale: [0.8, 1, 0.8], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-[-30px] w-24 h-4 bg-black/30 rounded-full blur-lg"
            />
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white border-gray-100 text-gray-900 shadow-2xl rounded-2xl p-2 z-[200]">
          <div className="px-3 py-2 mb-1 border-b border-gray-50">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Where to, friend?</p>
          </div>
          {menuItems.map((item) => (
            <DropdownMenuItem 
              key={item.label}
              onClick={() => {
                if (item.path.startsWith("#")) {
                  const targetId = item.path.slice(1)
                  const el = document.getElementById(targetId)
                  if (el) {
                    const rect = el.getBoundingClientRect()
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
                    const navbarHeight = 80
                    const targetPosition = rect.top + scrollTop - navbarHeight
                    window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth",
                    })
                  }
                } else {
                  router.push(item.path)
                }
              }}
              className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer hover:bg-cyan-50 focus:bg-cyan-50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-cyan-100 group-hover:text-cyan-600 transition-colors">
                {item.icon}
              </div>
              <span className="font-bold text-sm">{item.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
