"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { Label } from "@/components/ui/label"

interface SchoolPopupFormProps {
  onClose: () => void
}

export function SchoolPopupForm({ onClose }: SchoolPopupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Close after success message
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="bg-card border-primary/50 max-w-lg w-full relative">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
        >
          <X size={20} />
        </Button>

        <CardContent className="p-6 space-y-6">
          {!isSuccess ? (
            <>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Future School Model</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Interested in bringing Edunetic's AI-powered curriculum to your school? Fill out the form below and
                  we'll get in touch with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="school-name">School Name *</Label>
                  <Input
                    id="school-name"
                    name="schoolName"
                    placeholder="Enter your school name"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-person">Contact Person *</Label>
                  <Input
                    id="contact-person"
                    name="contactPerson"
                    placeholder="Your full name"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@school.com"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-background hover:bg-primary/90 neon-glow font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary">✓</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We've received your inquiry. Our team will contact you within 24 hours.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
