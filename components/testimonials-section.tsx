"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Shaurya Gaikwad",
    role: "Founder, Leap",
    image: "/images/shaurya-profile.jpg",
    rating: 5,
    text: "Edunetic's approach to AI education is revolutionary. They bridge the gap between theory and practical industry application perfectly.",
  },
  {
    name: "Raul John Aju",
    role: "Founder, AI Realm Technologies",
    rating: 5,
    text: "The quality of content provided here is top-notch. It's exactly what the next generation of Indian innovators needs to excel.",
  },
  {
    name: "Ayush Tiwari",
    role: "Founder, Growth.ai",
    rating: 5,
    text: "An incredible resource for anyone looking to scale their skills in the AI era. The clarity of instruction is unmatched.",
  },
  {
    name: "Sarthak Singh",
    role: "Founder, Spike",
    rating: 5,
    text: "Edunetic India is making high-end tech education accessible. Their curriculum is forward-thinking and highly relevant.",
  },
  {
    name: "Divyansh Shukla",
    role: "Founder, Collabset",
    rating: 5,
    text: "I'm impressed by how they simplify complex concepts. A must-have platform for students aiming for the future.",
  },
  {
    name: "Gautam Miyani",
    role: "Content Creator",
    rating: 5,
    text: "The most engaging AI learning platform I've come across. They truly understand how to teach for the modern age.",
  },
  {
    name: "Abhishek Dixit",
    role: "CEO, Cosmic Soul",
    rating: 5,
    text: "Visionary leadership and exceptional educational content. Edunetic is setting new benchmarks in Indian EdTech.",
  },
]

// Duplicate the testimonials to create a seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials]

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false)

  const [rating, setRating] = useState(5)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">What People Say</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by industry leaders and learners across India building future-ready skills
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
    <section className="py-20 relative overflow-hidden bg-background grid-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">What People Say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trusted by industry leaders and learners across India building future-ready skills
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

        {/* Feedback Button & Form */}
        <div className="text-center mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black text-lg px-12 py-7 rounded-full shadow-[0_0_30px_rgba(0,229,212,0.4)] hover:shadow-[0_0_50px_rgba(0,229,212,0.6)] transition-all duration-300 transform hover:scale-105"
              >
                Share Your Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-[#0B1215] border-black/10 dark:border-white/10 text-foreground dark:text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black text-[#00E5D4] uppercase tracking-tight">Student Review</DialogTitle>
              </DialogHeader>
              <form className="space-y-6 pt-4" onSubmit={(e) => { e.preventDefault(); alert('Review submitted! Thank you.'); }}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">Name</Label>
                  <Input id="name" placeholder="Enter your name" className="bg-slate-50 dark:bg-white/5 border-black/10 dark:border-white/10 focus:border-[#00E5D4] h-12 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="number" className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">Phone Number</Label>
                  <Input id="number" type="tel" placeholder="Enter your number" className="bg-slate-50 dark:bg-white/5 border-black/10 dark:border-white/10 focus:border-[#00E5D4] h-12 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">Rating</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" onClick={() => setRating(star)} className="p-1 hover:scale-110 transition-transform text-[#00E5D4]">
                        <Star className="w-6 h-6" fill={star <= rating ? "currentColor" : "none"} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review" className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">Share your review</Label>
                  <Textarea id="review" placeholder="Tell us about your experience" className="bg-slate-50 dark:bg-white/5 border-black/10 dark:border-white/10 focus:border-[#00E5D4] min-h-[100px] rounded-xl" required />
                </div>
                <Button type="submit" className="w-full bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black h-12 rounded-xl text-lg uppercase tracking-wider">
                  Submit Review
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
