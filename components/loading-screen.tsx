"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hide loader after a delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4500) // Increased time for all animations to complete

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05080A]"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: [0.5, 1, 0.8],
                x: [0, -10, 10, -5, 5, 0],
                y: [0, 5, -5, 10, -10, 0]
              }}
              transition={{ 
                opacity: { duration: 1, ease: "easeOut" },
                scale: { duration: 4, times: [0, 0.7, 1], ease: "easeInOut" },
                x: { duration: 2, repeat: Infinity, ease: "linear" },
                y: { duration: 1.5, repeat: Infinity, ease: "linear" }
              }}
              className="w-32 h-32 md:w-48 md:h-48 mb-8"
            >
              {/* Using the robot image as a placeholder logo or a generic icon */}
              <img 
                src="/robot.png" 
                alt="Edunetic Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,229,212,0.5)]"
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                <span className="text-[#00E5D4]">Edu</span>
                <span className="text-white">netic</span>
                <span className="text-[#00E5D4]"> India</span>
              </h1>
              {/* Dynamic Underline */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.8, duration: 1, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 h-1 bg-[#00E5D4] rounded-full shadow-[0_0_10px_#00E5D4]"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
              className="mt-6 text-white/80 font-bold uppercase tracking-[0.3em] text-sm md:text-base text-center"
            >
              The Future of Learning
            </motion.p>
            
            {/* Coding style decorative text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-24 font-mono text-xs text-[#00E5D4]/40"
            >
              {`> INITIALIZING_QUANTUM_CORE...`}
            </motion.div>
          </div>
          
          {/* India Map/Graphic subtle background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
