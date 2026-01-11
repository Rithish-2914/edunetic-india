"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Users } from "lucide-react"

const teamMembers = [
  {
    name: "Ruthvik Mishra",
    role: "Founder & CEO",
    image: "/images/founder-ruthvik-mishra.jpg",
    quote: "Entrepreneurship is the ultimate education. Building a product, leading a team, and mastering tech through real-world wins and losses is the only way to build a truly capable version of yourself."
  },
  {
    name: "Arnav Jain",
    role: "Co-Founder & COO",
    image: "/images/arnav-jain.jpg",
    quote: "Operational excellence is the foundation of innovation. We are building the infrastructure for the next generation of learners."
  },
  {
    name: "Anant Agrawal",
    role: "CFO",
    image: "/images/anant-agrawal.jpg",
    quote: "Financial literacy combined with AI is the ultimate superpower for the modern economy."
  },
  {
    name: "Vedant Tiwari",
    role: "CTO",
    image: "/images/vedant-tiwari.jpg",
    quote: "Technology is most powerful when it's invisible. Our goal is to make AI a natural extension of the learning process."
  }
]

export default function MeetTheTeam() {
  return (
    <div className="min-h-screen bg-[#05080A]">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-[#00E5D4] uppercase">
              Meet The Team
            </h1>
            <p className="text-[#94A3B8] text-xl font-medium">
              The visionaries and innovators behind Edunetic India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-[#0B1215] transition-all duration-500 hover:border-[#00E5D4]/30">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1215] to-[#05080A] group-hover:blur-sm transition-all duration-700">
                      <Users className="w-20 h-20 text-[#00E5D4]/20" />
                    </div>
                  )}
                  
                  {/* Overlay for Info */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="space-y-4"
                    >
                      <h3 className="text-3xl font-black text-white tracking-tight">{member.name}</h3>
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-[#00E5D4]" />
                        <p className="text-[#00E5D4] font-black uppercase text-xs tracking-[0.2em]">{member.role}</p>
                        <div className="h-px w-8 bg-[#00E5D4]" />
                      </div>
                      <p className="text-slate-200 text-sm italic font-medium leading-relaxed max-w-[280px]">
                        "{member.quote}"
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080A] via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#00E5D4] text-xs font-black uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}