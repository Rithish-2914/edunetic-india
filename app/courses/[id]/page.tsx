"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { PlaylistSidebar } from "@/components/playlist-sidebar"
import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { COURSES } from "@/lib/courses-data"

export default async function CoursePlaylistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <CoursePlaylistClient id={id} />
}

function CoursePlaylistClient({ id }: { id: string }) {
  const course = COURSES.find((c) => c.id === id)

  const [activeVideoId, setActiveVideoId] = useState<string>("")

  useEffect(() => {
    if (course?.videos && course.videos.length > 0) {
      setActiveVideoId(course.videos[0].youtubeId)
    }
  }, [course])

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Playlist Not Found</h1>
          <Button asChild className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90">
            <Link href="/courses">
              <ArrowLeft size={16} className="mr-2" />
              Back to Courses
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#00E5D4]/30 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 flex flex-col overflow-hidden">
        {/* Course Header Bar */}
        <div className="border-b border-[#1A2328] bg-background flex-shrink-0">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-[#8E9BA4] hover:text-[#00E5D4] hover:bg-[#1A2328]/50"
              >
                <Link href="/courses">
                  <ArrowLeft size={18} className="mr-2" />
                  All Courses
                </Link>
              </Button>
              <div className="h-6 w-px bg-[#1A2328]" />
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-foreground uppercase tracking-widest">{course.title}</h1>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="border-[#1A2328] text-[#8E9BA4] hover:text-[#00E5D4] hover:border-[#00E5D4]/50 gap-2 bg-transparent"
            >
              <Share2 size={14} />
              Share
            </Button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* LEFT: Scrollable Playlist */}
          <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0 flex flex-col border-b md:border-b-0">
            <PlaylistSidebar videos={course.videos} activeVideoId={activeVideoId} onVideoSelect={setActiveVideoId} />
          </div>

          {/* RIGHT: Main Video Viewport */}
          <div className="flex-1 bg-background flex flex-col overflow-hidden">
            <div className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-12">
              <div className="w-full max-w-5xl shadow-[0_0_100px_-20px_rgba(0,229,212,0.15)] rounded-2xl overflow-hidden border border-[#1A2328]">
                <VideoPlayer
                  videoId={activeVideoId}
                  title={course.videos.find((v) => v.youtubeId === activeVideoId)?.title || course.title}
                />
              </div>
            </div>

            {/* Current Video Info Overlay */}
            <div className="p-6 bg-background border-t border-[#1A2328]">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00E5D4] bg-[#00E5D4]/10 px-2 py-0.5 rounded">
                    Playing Now
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  {course.videos.find((v) => v.youtubeId === activeVideoId)?.title}
                </h2>
                <p className="text-[#8E9BA4] text-sm">
                  Created by {course.creator} • Part of {course.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified footer for workspace view */}
      <footer className="py-4 px-6 border-t border-[#1A2328] bg-background text-center text-[10px] text-[#2A3338] uppercase tracking-[0.2em] flex-shrink-0">
        Edunetic India © {new Date().getFullYear()} • Professional Playlist System
      </footer>
    </div>
  )
}
