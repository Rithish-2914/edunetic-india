"use client"

import { Play, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { PlaylistVideo } from "@/lib/courses-data"

interface PlaylistSidebarProps {
  videos: PlaylistVideo[]
  activeVideoId: string
  onVideoSelect: (videoId: string) => void
}

export function PlaylistSidebar({ videos, activeVideoId, onVideoSelect }: PlaylistSidebarProps) {
  return (
    <div className="h-full bg-background border-r border-[#1A2328] overflow-hidden flex flex-col">
      <div className="p-6 border-b border-[#1A2328]">
        <h2 className="text-xl font-bold text-foreground mb-2">Course Content</h2>
        <div className="flex items-center gap-2">
          <span className="text-[#8E9BA4] text-sm font-medium">{videos.length} Days of Learning</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#1A2328] scrollbar-track-transparent">
        {videos.map((video) => {
          const isActive = video.youtubeId === activeVideoId
          return (
            <button
              key={video.youtubeId}
              onClick={() => onVideoSelect(video.youtubeId)}
              className={cn(
                "w-full p-5 border-b border-[#1A2328] text-left transition-all duration-300 group hover:bg-[#1A2328]/30",
                isActive && "bg-[#00E5D4]/5 border-l-2 border-l-[#00E5D4]",
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all",
                    isActive
                      ? "bg-[#00E5D4] text-[#05080A]"
                      : "bg-[#1A2328] text-[#8E9BA4] group-hover:bg-[#00E5D4]/20 group-hover:text-[#00E5D4]",
                  )}
                >
                  {isActive ? <Play size={14} className="fill-current" /> : video.day}
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className={cn(
                      "text-sm font-semibold mb-1 line-clamp-2 transition-colors",
                      isActive ? "text-[#00E5D4]" : "text-foreground group-hover:text-[#00E5D4]",
                    )}
                  >
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#8E9BA4] uppercase tracking-wider font-bold">
                    <CheckCircle2 size={10} className={isActive ? "text-[#00E5D4]" : "text-[#1A2328]"} />
                    <span>Day {video.day}</span>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
