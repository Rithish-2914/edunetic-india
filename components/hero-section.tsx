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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 grid-background px-4"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5D4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side: Text Content */}
          <div className="space-y-8 text-left">
            <motion.div
              initial={mounted ? { opacity: 0, x: -50 } : false}
              animate={mounted ? { opacity: 1, x: 0 } : false}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                <span className="text-white">Welcome to</span>
                <br />
                <span className="text-[#00E5D4] cyan-glow">Edunetic India</span>
              </h1>
              <div className="mt-6 space-y-4">
                <p className="text-xl md:text-2xl text-white font-bold tracking-tight uppercase border-l-4 border-[#00E5D4] pl-4">
                  Desh Ka Vikaas Sabke Sath
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed font-medium max-w-md">
                  Experience the next generation of education. Our AI-powered platform provides cutting-edge learning paths for tomorrow's innovators in India.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black text-lg px-8 py-6 rounded-full shadow-[0_0_30px_rgba(0,229,212,0.3)]"
              >
                <Link href="#courses">Explore Courses</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Side: Founder */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <motion.div
              initial={mounted ? { opacity: 0, x: 50 } : false}
              animate={mounted ? { opacity: 1, x: 0 } : false}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group cursor-pointer"
            >
              <div className="relative w-72 h-96 md:w-80 md:h-[450px] overflow-hidden rounded-2xl border-2 border-[#00E5D4]/20 shadow-2xl transition-all duration-500 group-hover:scale-[1.05]">
                <img 
                  src="/founder-new.png" 
                  alt="Ruthvik Mishra" 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080A] via-transparent to-transparent opacity-40" />
              </div>
              <div className="mt-6 space-y-1">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">Ruthvik Mishra</h3>
                <p className="text-[#00E5D4] font-bold text-lg md:text-xl uppercase tracking-wider">Founder & CEO</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
