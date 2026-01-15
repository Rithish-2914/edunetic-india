"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "sonner"

export function EarlyAccessForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Thanks for your interest! We'll be in touch soon.")
    setIsOpen(false)
    setLoading(false)
  }

  return (
    <section className="py-24 md:py-32 relative bg-background scroll-mt-24 grid-background">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Get Early Access to <span className="text-[#00E5D4] cyan-glow">Premium Courses</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Be the first to know when we launch our advanced AI and future skills curriculum. 
            Join the waitlist for exclusive early bird benefits.
          </p>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg"
              className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black text-lg px-12 py-7 rounded-full shadow-[0_0_30px_rgba(0,229,212,0.4)] hover:shadow-[0_0_50px_rgba(0,229,212,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              Apply for Early Access
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Early Access Application</DialogTitle>
              <DialogDescription>
                Tell us a bit about yourself and what you're looking for.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="intro">What are you building or seeking?</Label>
                <Textarea 
                  id="intro" 
                  placeholder="Tell us a bit about your journey or goals..." 
                  className="min-h-[100px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-bold" disabled={loading}>
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
