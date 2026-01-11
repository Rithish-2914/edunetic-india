"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Rocket, Lightbulb, Users, GraduationCap, Zap } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Helping schools create future-ready, AI-ready students who are not just academically strong, but confident, skilled, and capable of leading in the real world.",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    icon: Rocket,
    title: "What We Do",
    description:
      "We partner with schools to enhance their curriculum by integrating real-life skills, career exposure, and experiential learning alongside academics.",
    gradient: "from-cyan-500/10 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Beyond Textbooks",
    description:
      "Students experience the real world through hands-on projects, guided explorations, and practical learning frameworks that go beyond standard education.",
    gradient: "from-purple-500/10 to-transparent",
  },
  {
    icon: Zap,
    title: "Innovation & AI",
    description:
      "Introducing students to the world of startups, entrepreneurship, and innovation. Selected students receive certifications and internship access.",
    gradient: "from-orange-500/10 to-transparent",
  },
  {
    icon: Users,
    title: "Industry Mentorship",
    description:
      "We bring entrepreneurs, investors, artists, and industry professionals into the school ecosystem to help students discover new opportunities.",
    gradient: "from-green-500/10 to-transparent",
  },
  {
    icon: GraduationCap,
    title: "Affordable Excellence",
    description:
      "Designed to help schools deliver high-impact, future-focused education without making it expensive or exclusive, so all can benefit equally.",
    gradient: "from-red-500/10 to-transparent",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-background scroll-mt-32 overflow-hidden grid-background">
      <div className="absolute inset-0 opacity-90 pointer-events-none" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-white">About </span>
            <span className="text-[#00E5D4]">Us</span>
          </h2>
          <p className="text-[#94A3B8] text-lg md:text-xl font-medium leading-relaxed">
            Edunetic India is an education innovation company transforming how students learn, think, and grow.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="bg-[#0B1215] border-white/5 hover:border-[#00E5D4]/30 transition-all duration-500 group overflow-hidden relative rounded-2xl flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,229,212,0.1)] hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="p-8 space-y-6 relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#00E5D4]/5 flex items-center justify-center group-hover:bg-[#00E5D4]/10 transition-all duration-500 flex-shrink-0">
                    <card.icon className="w-7 h-7 text-[#00E5D4]" />
                  </div>

                  <div className="space-y-3 flex-grow">
                    <h3 className="text-2xl font-black text-white group-hover:text-[#00E5D4] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#94A3B8] text-base leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Belief */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-white/5">
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Our belief is clear:</h3>
             <p className="text-[#00E5D4] text-xl md:text-2xl font-black italic">
               "Education should prepare students for life, not just exams."
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
