import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Wrench, TrendingUp, MapPin, Sparkles, Gauge, Rocket, RefreshCw, Globe } from "lucide-react"

const traditionalPoints = [
  {
    icon: BookOpen,
    text: "Rigid curriculum",
  },
  {
    icon: Users,
    text: "Same pace for every student",
  },
  {
    icon: Wrench,
    text: "Outdated tools and methods",
  },
  {
    icon: TrendingUp,
    text: "Slow to adapt to industry change",
  },
  {
    icon: MapPin,
    text: "Location & time dependent",
  },
]

const eduneticPoints = [
  {
    icon: Sparkles,
    text: "AI-powered personalized learning",
  },
  {
    icon: Gauge,
    text: "Learn at your own pace",
  },
  {
    icon: Rocket,
    text: "Modern tools & real-world skills",
  },
  {
    icon: RefreshCw,
    text: "Content updates with industry trends",
  },
  {
    icon: Globe,
    text: "Learn anytime, anywhere",
  },
]

export function ComparisonSection() {
  return (
    <section className="py-24 relative bg-background">
      <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-white">Education. </span>
            <span className="text-[#00E5D4] cyan-glow">Then vs Now</span>
          </h2>
          <p className="text-[#94A3B8] text-lg md:text-xl font-medium leading-relaxed">
            Why Edunetic is built for the AI era
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Education Card */}
          <Card className="bg-[#0B1215]/50 border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm opacity-70">
            <CardContent className="p-8 space-y-8">
              <h3 className="text-2xl font-black text-white/60 text-center">Traditional Education</h3>

              <ul className="space-y-5">
                {traditionalPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <point.icon className="w-5 h-5 text-white/40" />
                    </div>
                    <span className="text-[#94A3B8] text-base leading-relaxed font-medium pt-2">{point.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Edunetic Way Card */}
          <Card className="bg-[#0B1215] border-[#00E5D4]/30 rounded-2xl overflow-hidden relative group hover:border-[#00E5D4]/50 transition-all duration-500 lg:scale-105">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#00E5D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00E5D4]/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <CardContent className="p-8 space-y-8 relative z-10">
              <h3 className="text-2xl font-black text-[#00E5D4] text-center cyan-glow">The Edunetic Way</h3>

              <ul className="space-y-5">
                {eduneticPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00E5D4]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#00E5D4]/20 transition-all duration-300">
                      <point.icon className="w-5 h-5 text-[#00E5D4]" />
                    </div>
                    <span className="text-white text-base leading-relaxed font-medium pt-2">{point.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
