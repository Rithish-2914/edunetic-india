"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Award } from "lucide-react"

const pillars = [
  {
    number: "01",
    icon: GraduationCap,
    title: "AI-Powered Curriculum",
    description: "Personalized academic pathways aligned with student pace, capability, and future skills.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Project-based learning with real-world applications, not rote memorization.",
  },
  {
    number: "03",
    icon: Users,
    title: "Expert Instructors",
    description: "Guidance from industry professionals and experienced AI educators.",
  },
  {
    number: "04",
    icon: Award,
    title: "Certification Programs",
    description: "Structured certifications aligned with skills, not just syllabus completion.",
  },
]

export function FutureSchoolSection() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="py-24 bg-[#05080A] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Future School Model</h2>
          <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
            A structured AI-powered education framework for next-generation institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="bg-[#0B1215] border-gray-800 hover:border-primary/40 transition-all duration-500 rounded-xl overflow-hidden group relative"
            >
              <CardContent className="p-8 h-full flex flex-col items-start space-y-6">
                {/* Background Number */}
                <span className="absolute top-4 right-6 text-6xl font-bold text-white/5 select-none transition-colors group-hover:text-primary/10">
                  {pillar.number}
                </span>

                {/* Icon and Number Label */}
                <div className="flex items-center justify-between w-full">
                  <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors border border-primary/10">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-primary/60 uppercase">
                    Pillar {pillar.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">{pillar.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">{pillar.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            onClick={() => setShowForm(true)}
            size="lg"
            className="bg-primary text-black hover:bg-primary/90 font-bold text-sm uppercase tracking-widest px-10 py-7 rounded-md transition-all duration-300 shadow-lg shadow-primary/10"
          >
            Partner With Edunetic
          </Button>
        </div>
      </div>
    </section>
  )
}
