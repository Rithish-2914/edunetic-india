"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05080A]"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo: Fade In + Shake + Zoom Out */}
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ 
                opacity: 1, 
                scale: [0.1, 1.2, 0.9],
                x: [0, -15, 15, -10, 10, 0],
                y: [0, 10, -10, 15, -15, 0]
              }}
              transition={{ 
                opacity: { duration: 1.2, ease: "easeOut" },
                scale: { duration: 4.5, times: [0, 0.6, 1], ease: "easeInOut" },
                x: { duration: 0.4, repeat: 8, ease: "easeInOut" },
                y: { duration: 0.3, repeat: 10, ease: "easeInOut" }
              }}
              className="w-40 h-40 md:w-56 md:h-56 mb-12"
            >
              <img 
                src="/robot.png" 
                alt="Edunetic Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,229,212,0.6)]"
              />
            </motion.div>

            {/* Company Name: Cyan-White Underlined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter flex items-center gap-2">
                <span className="text-[#00E5D4]">Edu</span>
                <span className="text-white">netic</span>
                <span className="text-[#00E5D4]">India</span>
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.2, duration: 1.2, ease: "circOut" }}
                className="absolute -bottom-3 left-0 h-1.5 bg-[#00E5D4] rounded-full shadow-[0_0_20px_#00E5D4]"
              />
            </motion.div>

            {/* Tagline: White */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 1 }}
              className="mt-10 text-white font-black uppercase tracking-[0.4em] text-sm md:text-lg text-center opacity-90"
            >
              The Future of Learning
            </motion.p>
            
            {/* India/Coding Detail */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute -bottom-32 font-mono text-xs text-[#00E5D4]/50 tracking-widest"
            >
              {`// CODING_THE_FUTURE_OF_INDIA_...`}
            </motion.div>
          </div>
          
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
