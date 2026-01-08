"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CourseCard } from "@/components/course-card"
import { COURSES } from "@/lib/courses-data"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#05080A] text-white selection:bg-[#00E5D4]/30">
      {/* Grid Background Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1A2328_1px,transparent_1px),linear-gradient(to_bottom,#1A2328_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      <Navbar />

      <main className="relative pt-32 pb-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-5">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-[#00E5D4] bg-clip-text text-transparent">
              Courses
            </h1>
            <p className="text-lg text-[#8E9BA4] leading-relaxed">
              Master the future with <span className="text-[#00E5D4] font-semibold">Edunetic India</span>. Our
              industry-grade playlists bridge education and the AI revolution.
            </p>
          </div>

          <div className="space-y-16">
            {/* Free Courses Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">Free Courses</h2>
                <div className="h-px flex-1 bg-white/10" />
                <span className="px-3 py-1 bg-[#00E5D4]/10 text-[#00E5D4] text-xs font-bold rounded-full border border-[#00E5D4]/20">
                  {COURSES.filter(c => !c.isPaid).length} Available
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {COURSES.filter(c => !c.isPaid).map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    creator={course.creator}
                    duration={course.duration}
                  />
                ))}
              </div>
            </section>

            {/* Paid Courses Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white opacity-50">Paid Courses</h2>
                <div className="h-px flex-1 bg-white/5" />
                <span className="px-3 py-1 bg-white/5 text-white/40 text-xs font-bold rounded-full border border-white/10">
                  Coming Soon
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-[#00E5D4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#00E5D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Exciting Premium Content On the Way</h3>
                <p className="text-[#8E9BA4] max-w-sm mx-auto">
                  We're currently crafting high-impact premium courses to accelerate your learning. Stay tuned!
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
