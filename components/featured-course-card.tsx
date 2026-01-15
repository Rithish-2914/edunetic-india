"use client"

import { Clock, Users, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface FeaturedCourseCardProps {
  title: string
  description: string
  instructor: string
  thumbnail: string
  duration: string
  learners: string
  rating: number
  onViewPlaylist: () => void
}

export function FeaturedCourseCard({
  title,
  description,
  instructor,
  thumbnail,
  duration,
  learners,
  rating,
  onViewPlaylist,
}: FeaturedCourseCardProps) {
  return (
    <Card className="group relative bg-card border-black/10 dark:border-[#1A2328] hover:border-[#00E5D4]/40 transition-all duration-500 overflow-hidden rounded-2xl flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,229,212,0.1)] hover:-translate-y-1">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Top: Thumbnail */}
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle FREE pill badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#00E5D4]/10 border border-[#00E5D4]/20 text-[#00E5D4] backdrop-blur-md">
              Free
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          <div className="space-y-4 mb-6">
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-[#00E5D4] transition-colors duration-300 leading-tight tracking-tight">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-1">{description}</p>
            </div>
            <p className="text-[11px] font-medium text-slate-500 dark:text-[#4A555E] uppercase tracking-widest">
              By <span className="text-muted-foreground">{instructor}</span>
            </p>
          </div>

          {/* Meta Row */}
          <div className="flex items-center gap-6 text-[13px] text-muted-foreground border-t border-black/5 dark:border-[#1A2328] pt-6 mb-8">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#00E5D4]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-[#00E5D4]" />
              <span>{learners}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-[#00E5D4] fill-[#00E5D4]" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Action: Primary Button */}
          <div className="mt-auto">
            <Button
              onClick={onViewPlaylist}
              className="w-full bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 rounded-xl py-6 font-bold text-sm transition-all duration-300 uppercase tracking-wider"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </CardContent>

      {/* Soft cyan border glow overlay handled by Card transition */}
    </Card>
  )
}
