"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Rocket, Lightbulb, Users, GraduationCap, Zap, ShieldCheck } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const leadership = [
  {
    name: "Arnav Jain",
    title: "Co-Founder & COO",
    image: null,
    rank: "#02",
    quote: "Operational excellence is the foundation of innovation. We are building the infrastructure for the next generation of learners."
  },
  {
    name: "Anant Agrawal",
    title: "CFO",
    image: "/images/anant-agrawal.jpg",
    rank: "#03",
    quote: "Financial literacy combined with AI is the ultimate superpower for the modern economy."
  },
  {
    name: "Vedant Tiwari",
    title: "CTO",
    image: "/images/vedant-tiwari.jpg",
    rank: "#04",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Founder */}
          <TeamMemberCard 
            name="Ruthvik Mishra"
            title="Founder & CEO"
            image="/images/founder-ruthvik-mishra.jpg"
            rank="#01"
            quote="Entrepreneurship is the ultimate education. Building a product, leading a team, and mastering tech through real-world wins and losses is the only way to build a truly capable version of yourself."
          />

          {leadership.map((member, index) => (
            <TeamMemberCard 
              key={index}
              {...member}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamMemberCard({ name, title, image, rank, quote, delay = 0 }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-[#0B1215] transition-all duration-500">
        {/* Main Image */}
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1215] to-[#05080A] group-hover:grayscale">
            <Users className="w-20 h-20 text-[#00E5D4]/20" />
          </div>
        )}
        
        {/* Default Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080A] via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-0" />

        {/* Rank Badge - Top Right */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-[#0B1215]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex flex-col items-center min-w-[70px] shadow-xl">
            <span className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase mb-1">Success Rank</span>
            <span className="text-2xl font-black text-[#FF9F1C] tracking-tighter">{rank}</span>
            <div className="flex gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#FF9F1C]" />
              ))}
            </div>
          </div>
        </div>

        {/* Hover Content Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-[#1A1F23]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
          >
            {/* Glossy highlight effect */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <h3 className="text-2xl font-black text-white mb-1 tracking-tight leading-none">{name}</h3>
            <div className="flex items-center gap-1.5 mb-4">
              <ShieldCheck className="w-4 h-4 text-[#FF9F1C]" />
              <p className="text-[#FF9F1C] text-[10px] font-black uppercase tracking-[0.2em]">{title}</p>
            </div>
            
            <p className="text-sm text-gray-300 font-medium italic leading-relaxed">
              "{quote}"
            </p>
          </motion.div>
        </div>

        {/* Initial Info (only visible when not hovered) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
          <h4 className="text-2xl font-bold text-white mb-1">{name}</h4>
          <p className="text-[#00E5D4] text-sm font-black uppercase tracking-wider">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

