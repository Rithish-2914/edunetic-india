import { Card, CardContent } from "@/components/ui/card"
import { Target, Rocket, Lightbulb, Users, GraduationCap, Zap } from "lucide-react"

const leadership = [
  {
    name: "Arnav Jain",
    title: "Co-Founder & COO",
    image: null,
  },
  {
    name: "Anant Agrawal",
    title: "CFO",
    image: "/images/anant-agrawal.jpg",
  },
  {
    name: "Vedant Tiwari",
    title: "CTO",
    image: "/images/vedant-tiwari.jpg",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative bg-[#05080A] scroll-mt-32 grid-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#00E5D4] uppercase tracking-tight">MEET THE TEAM</h2>
          <p className="text-lg text-muted-foreground/80 font-medium">
            The people shaping the future of AI-powered education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Founder */}
          <div className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-[#0B1215] transition-all duration-500 hover:border-[#00E5D4]/30 hover:-translate-y-2">
              <img
                src="/images/founder-ruthvik-mishra.jpg"
                alt="Ruthvik Mishra"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080A] via-[#05080A]/40 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Ruthvik Mishra</h3>
                <p className="text-[#00E5D4] text-sm font-black uppercase tracking-wider">Founder & CEO</p>
              </div>
            </div>
          </div>

          {leadership.map((member, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-[#0B1215] transition-all duration-500 hover:border-[#00E5D4]/30 hover:-translate-y-2">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1215] to-[#05080A]">
                    <Users className="w-20 h-20 text-[#00E5D4]/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080A] via-[#05080A]/20 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-[#00E5D4] text-sm font-black uppercase tracking-wider">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
