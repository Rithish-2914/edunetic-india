"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 grid-background px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-left max-w-xl">
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white opacity-0">Edunetic India</h1>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 grid-background px-4"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5D4] rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side: Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase text-foreground">
                Desh Ka <span className="text-[#00E5D4] cyan-glow">Vikaas</span> <br className="hidden md:block" /> Sabke <span className="text-[#00E5D4] cyan-glow">Saath</span>
              </h1>
              <div className="mt-6 space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
                Experience the next generation of education. Our AI-powered platform provides cutting-edge learning paths for tomorrow's innovators in India.
              </p>
            </div>
          </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black text-lg px-8 py-6 rounded-full shadow-[0_0_30px_rgba(0,229,212,0.3)]"
                >
                  <Link href="#courses">Explore Courses</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Empty Placeholder */}
          <div className="hidden lg:block min-h-[450px]">
          </div>
        </div>
      </div>
    </section>
  )
}
