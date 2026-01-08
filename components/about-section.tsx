import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, TrendingUp } from "lucide-react"

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To democratize AI education and empower students with cutting-edge knowledge that prepares them for the future of technology.",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To create a world where every learner has access to world-class AI education, fostering innovation and technological advancement.",
    gradient: "from-secondary/20 to-transparent",
  },
  {
    icon: TrendingUp,
    title: "Our Impact",
    description:
      "Transforming lives through education by bridging the gap between traditional learning and the future of AI-powered innovation.",
    gradient: "from-primary/20 to-transparent",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[#05080A] scroll-mt-20">
      <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-white">About </span>
            <span className="text-[#00E5D4] cyan-glow">Us</span>
          </h2>
          <p className="text-[#94A3B8] text-lg md:text-xl font-medium leading-relaxed">
            We are redefining the educational landscape in India. By integrating advanced AI with proven pedagogical
            methods, we empower the next generation of technological leaders.
          </p>
        </div>

        {/* Flashcards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="bg-[#0B1215] border-white/5 hover:border-[#00E5D4]/30 transition-all duration-500 group overflow-hidden relative rounded-2xl"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00E5D4]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 space-y-6 relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#00E5D4]/5 flex items-center justify-center group-hover:bg-[#00E5D4]/10 transition-all duration-500">
                  <card.icon className="w-7 h-7 text-[#00E5D4]" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#00E5D4] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#94A3B8] text-base leading-relaxed font-medium">{card.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
