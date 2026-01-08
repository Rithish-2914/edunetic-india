"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
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

// Duplicate the testimonials to create a seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials]

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">What Students Say</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by learners across India who are building future-ready skills
            </p>
          </div>
          <div className="flex gap-6 overflow-hidden py-4 opacity-0">
             {testimonials.slice(0, 3).map((t, i) => (
               <div key={i} className="w-[350px] flex-shrink-0" />
             ))}
          </div>
        </div>
      </section>
    )
  }

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

        <div className="relative mt-10">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 py-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="w-[350px] flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
