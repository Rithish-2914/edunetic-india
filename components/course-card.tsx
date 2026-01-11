"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User } from "lucide-react"
import Link from "next/link"

import { motion } from "framer-motion"

interface CourseCardProps {
  id: string
  title: string
  creator: string
  duration: string
}

export function CourseCard({ id, title, creator, duration }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group bg-card border-[#1A2328] hover:border-[#00E5D4]/50 transition-all duration-500 overflow-hidden rounded-2xl hover:translate-y-[-4px] hover:shadow-[0_20px_50px_-12px_rgba(0,229,212,0.2)]">
        <CardContent className="p-8 space-y-6">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#8E9BA4] text-xs">
              <User size={14} className="text-[#00E5D4]" />
              <span>{creator}</span>
            </div>
            <div className="flex items-center gap-2 text-[#8E9BA4] text-xs">
              <Clock size={14} className="text-[#00E5D4]" />
              <span>{duration}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-[#00E5D4] transition-colors duration-300 leading-tight">
              {title}
            </h3>
          </div>

          <Button
            asChild
            className="w-full bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-semibold rounded-xl h-11 shadow-[0_0_20px_-5px_rgba(0,229,212,0.3)] hover:shadow-[0_0_25px_-5px_rgba(0,229,212,0.5)] transition-all duration-300"
          >
            <Link href={`/courses/${id}`}>View Playlist</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
