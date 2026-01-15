"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5500)

    return () => clearTimeout(timer)
  }, [])

  // Generate particle positions only on client
  const particles = useMemo(() => {
    if (!mounted) return []
    return [...Array(20)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 100 - 50 + "%",
      initialY: Math.random() * 100 - 50 + "%",
      animateX: Math.random() * 100 - 50 + "%",
      animateY: Math.random() * 100 - 50 + "%",
      duration: Math.random() * 3 + 2,
    }))
  }, [mounted])

  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Background Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ 
                  opacity: 0, 
                  x: p.initialX, 
                  y: p.initialY 
                }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 1.5, 0.5],
                  x: p.animateX,
                  y: p.animateY
                }}
                transition={{ 
                  duration: p.duration, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute w-1 h-1 bg-[#00E5D4] rounded-full blur-[1px]"
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center z-10">
            {/* Logo: Fade In + Zoom Out */}
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ 
                opacity: 1, 
                scale: [0.1, 1.1, 1],
              }}
              transition={{ 
                opacity: { duration: 1.2, ease: "easeOut" },
                scale: { duration: 4, times: [0, 0.6, 1], ease: "easeInOut" },
              }}
              className="w-48 h-48 md:w-64 md:h-64 mb-12"
            >
              <img 
                src="/logo.png" 
                alt="Edunetic Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(0,229,212,0.7)]"
              />
            </motion.div>

            {/* Company Name: Full Cyan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#00E5D4] uppercase">
                EDUNETIC INDIA
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.5, duration: 1.5, ease: "circOut" }}
                className="absolute -bottom-4 left-0 h-2 bg-[#00E5D4] rounded-full shadow-[0_0_30px_#00E5D4]"
              />
            </motion.div>

            {/* Tagline: White */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1.2 }}
              className="mt-12 text-foreground font-black uppercase tracking-[0.5em] text-sm md:text-xl text-center opacity-90 italic"
            >
              Desh Ka Vikaas Sabke Sath
            </motion.p>
            
          </div>
          
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
