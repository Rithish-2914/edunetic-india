"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { TestimonialCard } from "@/components/testimonial-card"

const testimonials = [
  {
    name: "Arjun Patel",
    role: "Software Developer",
    rating: 5,
    text: "The AI courses are well-structured and practical. I finally understood concepts that felt overwhelming earlier.",
  },
  {
    name: "Sneha Reddy",
    role: "Data Analyst",
    rating: 5,
    text: "Edunetic made AI feel approachable. The teaching style is clear and beginner-friendly.",
  },
  {
    name: "Vikram Singh",
    role: "Engineering Student",
    rating: 4,
    text: "Great content with hands-on examples. It helped me build confidence in AI fundamentals.",
  },
  {
    name: "Ananya Krishnan",
    role: "Tech Enthusiast",
    rating: 5,
    text: "Complex AI concepts explained in a very simple and engaging way.",
  },
  {
    name: "Rohit Sharma",
    role: "BCA Student",
    rating: 5,
    text: "Perfect starting point for anyone curious about AI and future tech.",
  },
  {
    name: "Pooja Verma",
    role: "Final Year Student",
    rating: 4,
    text: "Clear explanations and real-world relevance. Highly recommended.",
  },
  {
    name: "Kunal Mehta",
    role: "Startup Intern",
    rating: 5,
    text: "Edunetic helped me understand AI beyond buzzwords.",
  },
  {
    name: "Neha Gupta",
    role: "Computer Science Student",
    rating: 5,
    text: "The learning experience is smooth and well-paced.",
  },
  {
    name: "Aman Yadav",
    role: "Class 12 Student",
    rating: 4,
    text: "AI finally makes sense to me now. Very motivating content.",
  },
  {
    name: "Shubham Mishra",
    role: "Engineering Aspirant",
    rating: 5,
    text: "Simple explanations with modern examples make learning fun.",
  },
  {
    name: "Ritika Jain",
    role: "MBA Student",
    rating: 4,
    text: "Helped me understand how AI applies to business and analytics.",
  },
  {
    name: "Saurabh Kumar",
    role: "Self-Learner",
    rating: 5,
    text: "Exactly what I needed to start my AI journey.",
  },
  {
    name: "Ishita Banerjee",
    role: "College Student",
    rating: 5,
    text: "Well-curated courses with clear learning outcomes.",
  },
  {
    name: "Manish Tiwari",
    role: "Tech Trainer",
    rating: 5,
    text: "The content quality is impressive and thoughtfully designed.",
  },
  {
    name: "Aditi Malhotra",
    role: "UX Student",
    rating: 4,
    text: "AI concepts explained without unnecessary complexity.",
  },
  {
    name: "Nikhil Joshi",
    role: "Backend Developer",
    rating: 5,
    text: "Great foundation-building courses for AI beginners.",
  },
  {
    name: "Kavya Nair",
    role: "B.Tech Student",
    rating: 5,
    text: "Learning here feels structured and purposeful.",
  },
  {
    name: "Harsh Vardhan",
    role: "Freelancer",
    rating: 4,
    text: "Helped me upskill and understand AI trends.",
  },
  {
    name: "Simran Kaur",
    role: "AI Enthusiast",
    rating: 5,
    text: "One of the cleanest and clearest AI learning platforms.",
  },
  {
    name: "Aditya Kulkarni",
    role: "Tech Blogger",
    rating: 5,
    text: "Edunetic focuses on clarity, not hype. That's rare.",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => setIsDragging(false)
    document.addEventListener("mouseup", handleMouseUpGlobal)
    return () => document.removeEventListener("mouseup", handleMouseUpGlobal)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">What Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trusted by learners across India who are building future-ready skills
          </p>
        </div>

        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing scroll-smooth hide-scrollbar px-4"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
