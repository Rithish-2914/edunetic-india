"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Award, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"

const pillars = [
  {
    number: "01",
    icon: GraduationCap,
    title: "AI-Powered Curriculum",
    description: "Personalized academic pathways aligned with student pace, capability, and future skills.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Project-based learning with real-world applications, not rote memorization.",
  },
  {
    number: "03",
    icon: Users,
    title: "Expert Instructors",
    description: "Guidance from industry professionals and experienced AI educators.",
  },
  {
    number: "04",
    icon: Award,
    title: "Certification Programs",
    description: "Structured certifications aligned with skills, not just syllabus completion.",
  },
]

export function FutureSchoolSection() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orgName: "",
    studentCount: "",
    board: "",
    location: "",
    branchType: "single",
    businessType: "single"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We will contact you soon.")
    setShowForm(false)
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden grid-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground uppercase">Future School Model</h2>
          <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
            A structured AI-powered education framework for next-generation institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="bg-card border-gray-800 hover:border-[#00E5D4]/40 transition-all duration-500 rounded-xl overflow-hidden group relative hover:shadow-[0_0_30px_rgba(0,229,212,0.1)] hover:-translate-y-1"
            >
              <CardContent className="p-8 h-full flex flex-col items-start space-y-6">
                {/* Background Number */}
                <span className="absolute top-4 right-6 text-6xl font-bold text-white/5 select-none transition-colors group-hover:text-primary/10">
                  {pillar.number}
                </span>

                {/* Icon and Number Label */}
                <div className="flex items-center justify-between w-full">
                  <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors border border-primary/10">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-primary/60 uppercase">
                    Pillar {pillar.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-foreground tracking-tight leading-snug">{pillar.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">{pillar.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            onClick={() => setShowForm(true)}
            size="lg"
            className="bg-primary text-black hover:bg-primary/90 font-bold text-sm uppercase tracking-widest px-10 py-7 rounded-md transition-all duration-300 shadow-lg shadow-primary/10"
          >
            Partner With Edunetic
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card border border-[#00E5D4]/20 p-8 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-black text-foreground mb-2 uppercase tracking-tight">Partner with <span className="text-[#00E5D4]">EDUNETIC</span></h2>
                <p className="text-gray-400 font-medium">Please fill in the details below to start our journey together.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Full Name</Label>
                    <Input 
                      required 
                      className="bg-background border-white/10 focus:border-[#00E5D4]/50 h-12 rounded-xl text-foreground" 
                      placeholder="Ruthvik Mishra"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Email Address</Label>
                    <Input 
                      required 
                      type="email" 
                      className="bg-background border-white/10 focus:border-[#00E5D4]/50 h-12 rounded-xl text-foreground" 
                      placeholder="ruthvik@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Phone Number</Label>
                    <Input 
                      required 
                      type="tel" 
                      className="bg-background border-white/10 focus:border-[#00E5D4]/50 h-12 rounded-xl text-foreground" 
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-gray-300 uppercase tracking-wider">School / Organization Name</Label>
                    <Input 
                      required 
                      className="bg-background border-white/10 focus:border-[#00E5D4]/50 h-12 rounded-xl text-foreground" 
                      placeholder="Enter name"
                      value={formData.orgName}
                      onChange={(e) => setFormData({...formData, orgName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Approx. Student Count</Label>
                    <Input 
                      required 
                      type="number" 
                      className="bg-background border-white/10 focus:border-[#00E5D4]/50 h-12 rounded-xl text-foreground" 
                      placeholder="e.g. 500"
                      value={formData.studentCount}
                      onChange={(e) => setFormData({...formData, studentCount: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Board Affiliation</Label>
                    <div className="relative">
                      <select 
                        required
                        className="w-full bg-background border border-white/10 focus:border-[#00E5D4]/50 h-12 rounded-xl text-foreground px-4 appearance-none cursor-pointer outline-none"
                        value={formData.board}
                        onChange={(e) => setFormData({...formData, board: e.target.value})}
                      >
                        <option value="" disabled className="bg-background">Select Board</option>
                        <option value="cbse" className="bg-background">CBSE</option>
                        <option value="icse" className="bg-background">ICSE</option>
                        <option value="state" className="bg-background">STATE BOARD</option>
                        <option value="ib" className="bg-background">IB</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-bold text-gray-300 uppercase tracking-wider">School Location (City, State)</Label>
                  <Input 
                    required 
                    className="bg-background border-white/10 focus:border-[#00E5D4]/50 h-12 rounded-xl text-foreground" 
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                  <div className="space-y-4">
                    <Label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Branch Type</Label>
                    <RadioGroup 
                      defaultValue="single" 
                      className="flex gap-4"
                      onValueChange={(v) => setFormData({...formData, branchType: v})}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="r1" className="border-[#00E5D4] text-[#00E5D4]" />
                        <Label htmlFor="r1" className="text-foreground cursor-pointer">Single</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multiple" id="r2" className="border-[#00E5D4] text-[#00E5D4]" />
                        <Label htmlFor="r2" className="text-foreground cursor-pointer">Multiple</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Business Type</Label>
                    <RadioGroup 
                      defaultValue="single" 
                      className="flex gap-4"
                      onValueChange={(v) => setFormData({...formData, businessType: v})}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="r3" className="border-[#00E5D4] text-[#00E5D4]" />
                        <Label htmlFor="r3" className="text-foreground cursor-pointer">Single Branch</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="franchise" id="r4" className="border-[#00E5D4] text-[#00E5D4]" />
                        <Label htmlFor="r4" className="text-foreground cursor-pointer">Franchise</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#00E5D4] text-black hover:bg-[#00E5D4]/90 h-14 rounded-xl font-black text-lg shadow-[0_0_30px_rgba(0,229,212,0.3)] transition-all duration-300"
                >
                  SUBMIT APPLICATION
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
