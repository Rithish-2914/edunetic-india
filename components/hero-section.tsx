import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 grid-background"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5D4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
            <span className="text-white">Welcome to </span>
            <br />
            <span className="text-[#00E5D4] cyan-glow">Edunetic India</span>
          </h1>

          {/* Tagline & Description */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-white font-bold tracking-tight uppercase">The Future of Learning</p>
            <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Experience the next generation of education. Our AI-powered platform provides cutting-edge learning paths
              for tomorrow's innovators in India.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black text-lg px-10 py-8 rounded-full shadow-[0_0_30px_rgba(0,229,212,0.3)] transition-all duration-300"
            >
              <Link href="#courses">Explore Courses</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/10 text-white hover:bg-white/5 font-bold text-lg px-10 py-8 rounded-full backdrop-blur-sm bg-transparent transition-all duration-300"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Stats Section - Integrated per brief */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00E5D4]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-1">
                <div className="text-4xl md:text-5xl font-black text-[#00E5D4] cyan-glow">100+</div>
                <div className="text-xs md:text-sm text-[#94A3B8] font-bold uppercase tracking-widest">
                  Students Enrolled
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00E5D4]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-1">
                <div className="text-4xl md:text-5xl font-black text-[#00E5D4] cyan-glow">2</div>
                <div className="text-xs md:text-sm text-[#94A3B8] font-bold uppercase tracking-widest">
                  Active Courses
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00E5D4]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-1">
                <div className="text-4xl md:text-5xl font-black text-[#00E5D4] cyan-glow">4.9</div>
                <div className="text-xs md:text-sm text-[#94A3B8] font-bold uppercase tracking-widest">
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
