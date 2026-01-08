const leadership = [
  {
    name: "Kushagra Shahi",
    title: "Co-Founder",
    image: "/images/kushagra-shahi.jpg",
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
    <section id="team" className="py-24 relative bg-[#05080A] scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Meet the Team</h2>
          <p className="text-lg text-muted-foreground/80 font-medium">
            The people shaping the future of AI-powered education
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="w-full max-w-md group cursor-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/5 bg-[#0B1215] transition-all duration-500 hover:border-[#00E5D4]/30 group-hover:-translate-y-2">
              <img
                src="/images/founder-ruthvik-mishra.jpg"
                alt="Ruthvik Mishra"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080A] via-[#05080A]/40 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#00E5D4] text-sm font-semibold tracking-wider uppercase mb-2">Founder & CEO</p>
                <h3 className="text-3xl font-bold text-white mb-3">Ruthvik Mishra</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-[280px]">
                  Building future-ready education for India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leadership.map((member, index) => (
            <div key={index} className="group cursor-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/5 bg-[#0B1215] transition-all duration-500 hover:border-[#00E5D4]/30 group-hover:-translate-y-1">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080A] via-[#05080A]/20 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-[#00E5D4] text-sm font-medium">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
