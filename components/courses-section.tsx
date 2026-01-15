"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FeaturedCourseCard } from "./featured-course-card"
import { VideoPlayer } from "./video-player"
import { motion } from "framer-motion"

const featuredCourses = [
  {
    id: 1,
    title: "AI Curious to AI Serious",
    description: "Learn AI fundamentals with practical clarity",
    instructor: "Rahul John Aju · AI Kid of India",
    thumbnail: "/images/chatgpt-20image-20dec-2031-2c-202025-2c-2010-49-56-20pm.png",
    duration: "12 hours",
    learners: "50+",
    rating: 4.9,
    playlistUrl: "https://youtube.com/playlist?list=PLYPXjk4-uiobhDPkyWVBrr70Avp5y1Z6-",
  },
  {
    id: 2,
    title: "AI Learner to AI Earner",
    description: "Advanced AI concepts for real-world growth",
    instructor: "Rahul John Aju · AI Kid of India",
    thumbnail: "/images/ai-learner-to-ai-earner.png",
    duration: "18 hours",
    learners: "30+",
    rating: 5.0,
    playlistUrl: "https://youtube.com/playlist?list=PLYPXjk4-uioZwrEIAMZHjjcQWkwT2eEMs",
  },
  {
    id: 3,
    title: "Starting with meta ads",
    description: "Master Meta Ads from scratch for your business",
    instructor: "Satish Kushwaha",
    thumbnail: "/images/meta-ads-thumb.png",
    duration: "5 hours",
    learners: "New",
    rating: 4.8,
    playlistUrl: "#",
  },
]

export function CoursesSection() {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null)

  return (
    <section id="courses" className="py-24 md:py-32 relative bg-background scroll-mt-24 grid-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Learner To <span className="text-[#00E5D4] cyan-glow">Creator</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Creator led free courses to introduce students to AI and future skills.
          </p>
        </div>

        {/* Courses Carousel */}
        <div className="relative mt-10">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 py-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {[...featuredCourses, ...featuredCourses].map((course, index) => (
                <div key={`${course.id}-${index}`} className="w-[450px] flex-shrink-0">
                  <FeaturedCourseCard
                    {...course}
                    onViewPlaylist={() => setActiveVideo({ id: course.playlistUrl, title: course.title })}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black text-lg px-12 py-7 rounded-full shadow-[0_0_30px_rgba(0,229,212,0.4)] hover:shadow-[0_0_50px_rgba(0,229,212,0.6)] transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoPlayer videoId={activeVideo.id} title={activeVideo.title} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  )
}
