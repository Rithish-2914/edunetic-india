"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#05080A] scroll-mt-32 grid-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Questions, partnerships, or collaborations — we’re here to talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Column — Contact Options */}
          <div className="space-y-12">
            <div className="grid gap-10">
              {/* Email Card */}
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#00E5D4]/20 flex items-center justify-center bg-[#00E5D4]/5 group-hover:bg-[#00E5D4]/10 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#00E5D4]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#00E5D4] mb-1">Email Us</h4>
                  <a
                    href="mailto:eduneticindia@zohomail.in"
                    className="text-xl font-medium text-white hover:text-[#00E5D4] transition-colors duration-300 block mb-1"
                  >
                    eduneticindia@zohomail.in
                  </a>
                  <p className="text-sm text-slate-500 italic">We usually respond within 24 hours</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#00E5D4]/20 flex items-center justify-center bg-[#00E5D4]/5 group-hover:bg-[#00E5D4]/10 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#00E5D4]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#00E5D4] mb-1">Call Us</h4>
                  <a
                    href="tel:+916394397986"
                    className="text-xl font-medium text-white hover:text-[#00E5D4] transition-colors duration-300 block mb-1"
                  >
                    +91 6394397986
                  </a>
                  <p className="text-sm text-slate-500 italic">Mon–Fri · 9am–6pm IST</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#00E5D4]/20 flex items-center justify-center bg-[#00E5D4]/5 group-hover:bg-[#00E5D4]/10 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#00E5D4]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#00E5D4] mb-1">Based In</h4>
                  <p className="text-xl font-medium text-white">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#00E5D4]/5 blur-3xl rounded-full opacity-30 pointer-events-none" />
            <div className="relative bg-[#0B1215] border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm text-slate-400 ml-1">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ruthvik Mishra"
                        required
                        className="bg-[#05080A] border-white/10 h-12 focus:border-[#00E5D4]/50 focus:ring-[#00E5D4]/20 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-slate-400 ml-1">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ruthvik@gmail.com"
                        required
                        className="bg-[#05080A] border-white/10 h-12 focus:border-[#00E5D4]/50 focus:ring-[#00E5D4]/20 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm text-slate-400 ml-1">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Partnership Inquiry"
                      required
                      className="bg-[#05080A] border-white/10 h-12 focus:border-[#00E5D4]/50 focus:ring-[#00E5D4]/20 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm text-slate-400 ml-1">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about how we can collaborate..."
                      rows={5}
                      required
                      className="bg-[#05080A] border-white/10 focus:border-[#00E5D4]/50 focus:ring-[#00E5D4]/20 rounded-xl resize-none p-4"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 h-14 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,229,212,0.2)] hover:shadow-[0_0_30px_rgba(0,229,212,0.3)]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-[#00E5D4]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#00E5D4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 max-w-xs mx-auto">
                    Thank you for reaching out. We've received your inquiry and will get back to you shortly.
                  </p>
                  <Button
                    variant="link"
                    onClick={() => setIsSuccess(false)}
                    className="text-[#00E5D4] hover:text-[#00E5D4]/80 mt-4"
                  >
                    Send another message
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
