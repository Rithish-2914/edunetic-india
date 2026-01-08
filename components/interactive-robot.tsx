"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

export function InteractiveRobot() {
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

  if (!mounted) return <div className="w-64 h-64" />

  return (
    <div ref={containerRef} className="relative w-64 h-64 flex items-center justify-center perspective-[1000px]">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-48 h-56 flex flex-col items-center justify-center"
      >
        {/* Antenna */}
        <div className="absolute top-[-20px] w-1 h-8 bg-gray-400 rounded-full">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-[-4px] left-[-3px] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#00E5D4]" 
          />
        </div>

        {/* Head */}
        <div className="w-32 h-28 bg-gray-800 rounded-2xl border-4 border-gray-700 shadow-xl relative overflow-hidden">
          {/* Screen/Face */}
          <div className="absolute inset-2 bg-black rounded-lg flex items-center justify-center gap-6">
            {/* Eyes */}
            <motion.div style={{ x: eyeX, y: eyeY }} className="flex gap-8">
              <div className="relative w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_8px_#00E5D4]">
                 <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
              </div>
              <div className="relative w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_8px_#00E5D4]">
                 <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
              </div>
            </motion.div>
          </div>
          {/* Blush */}
          <div className="absolute bottom-4 left-4 w-4 h-2 bg-pink-500/20 rounded-full blur-[2px]" />
          <div className="absolute bottom-4 right-4 w-4 h-2 bg-pink-500/20 rounded-full blur-[2px]" />
        </div>

        {/* Neck */}
        <div className="w-10 h-4 bg-gray-600 -mt-1" />

        {/* Body */}
        <div className="w-36 h-32 bg-gray-800 rounded-3xl border-4 border-gray-700 shadow-2xl relative">
          {/* Chest light */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-900 rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: [-20, 20] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="w-4 h-full bg-cyan-400 shadow-[0_0_5px_#00E5D4]" 
            />
          </div>
          
          {/* Hands */}
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-6 top-8 w-6 h-16 bg-gray-700 rounded-full border-2 border-gray-600" 
          />
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            className="absolute -right-6 top-8 w-6 h-16 bg-gray-700 rounded-full border-2 border-gray-600" 
          />
        </div>

        {/* Hovering shadow */}
        <motion.div 
          animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-[-40px] w-32 h-4 bg-black/40 rounded-full blur-xl"
        />
      </motion.div>
    </div>
  )
}
