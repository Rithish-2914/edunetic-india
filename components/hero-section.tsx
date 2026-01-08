"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { InteractiveRobot } from "./interactive-robot"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 grid-background px-4"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5D4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-8 text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                <span className="text-white">Welcome to</span>
                <br />
                <span className="text-[#00E5D4] cyan-glow">Edunetic India</span>
              </h1>
              <div className="mt-6 space-y-4">
                <p className="text-xl md:text-2xl text-white font-bold tracking-tight uppercase">
                  The Future of Learning
                </p>
                <p className="text-[#94A3B8] text-lg leading-relaxed font-medium max-w-md">
                  Experience the next generation of education. Our AI-powered platform provides cutting-edge learning paths for tomorrow's innovators in India.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

          {/* Center: Robot */}
          <div className="flex justify-center order-1 lg:order-2 lg:scale-125">
            <InteractiveRobot />
          </div>

          {/* Right Side: Founder */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right order-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              <div className="relative w-64 h-80 overflow-hidden rounded-2xl border-2 border-[#00E5D4]/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src="/founder.jpg" 
                  alt="Ruthvik Mishra" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080A] via-transparent to-transparent opacity-60" />
              </div>
              <div className="mt-6 space-y-1">
                <h3 className="text-3xl font-black text-white tracking-tight">Ruthvik Mishra</h3>
                <p className="text-[#00E5D4] font-bold text-lg uppercase tracking-wider">Founder & CEO</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
