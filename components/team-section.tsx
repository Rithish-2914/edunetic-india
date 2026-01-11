"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Rocket, Lightbulb, Users, GraduationCap, Zap, ShieldCheck, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const leadership = [
  {
    name: "Arnav Jain",
    title: "Co-Founder & COO",
    image: "/images/arnav-jain.jpg",
    quote: "Operational excellence is the foundation of innovation. We are building the infrastructure for the next generation of learners."
  },
  {
    name: "Anant Agrawal",
    title: "CFO",
    image: "/images/anant-agrawal.jpg",
    quote: "Financial literacy combined with AI is the ultimate superpower for the modern economy."
  },
  {
    name: "Vedant Tiwari",
    title: "CTO",
    image: "/images/vedant-tiwari.jpg",
    quote: "Technology is most powerful when it's invisible. Our goal is to make AI a natural extension of the learning process."
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative bg-[#05080A] scroll-mt-32 grid-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#00E5D4] uppercase tracking-tight">MEET THE TEAM</h2>
          <p className="text-lg text-muted-foreground/80 font-medium">
            The people shaping the future of AI-powered education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {/* Founder */}
          <TeamMemberCard 
            name="Ruthvik Mishra"
            title="Founder & CEO"
            image="/images/founder-ruthvik-mishra.jpg"
            quote="Entrepreneurship is the ultimate education. Mastering tech through real-world wins and losses is the only way to build a truly capable version of yourself."
          />

          {leadership.map((member, index) => (
            <TeamMemberCard 
              key={index}
              {...member}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-center"
        >
          <Link href="/meet-the-team">
            <button className="group flex items-center gap-2 bg-[#00E5D4]/10 hover:bg-[#00E5D4] text-[#00E5D4] hover:text-[#05080A] px-8 py-4 rounded-full font-black uppercase tracking-widest transition-all duration-300 border border-[#00E5D4]/20 hover:border-transparent shadow-[0_0_20px_rgba(0,229,212,0.1)] hover:shadow-[0_0_30px_rgba(0,229,212,0.3)]">
              Meet The Whole Team
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function TeamMemberCard({ name, title, image, quote, delay = 0 }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-[#0B1215] transition-all duration-500 hover:border-[#00E5D4]/30 hover:-translate-y-2">
        {/* Main Image */}
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1215] to-[#05080A]">
            <Users className="w-20 h-20 text-[#00E5D4]/20" />
          </div>
        )}
        
        {/* Default Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080A] via-[#05080A]/40 to-transparent opacity-80" />

        {/* Info (Visible by default on home page) */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h4 className="text-2xl font-bold text-white mb-1">{name}</h4>
          <p className="text-[#00E5D4] text-sm font-black uppercase tracking-wider">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

