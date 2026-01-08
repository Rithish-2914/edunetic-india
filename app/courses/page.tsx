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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {COURSES.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                creator={course.creator}
                duration={course.duration}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
