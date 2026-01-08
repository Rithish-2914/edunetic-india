"use client"

import { X } from "lucide-react"

interface VideoPlayerProps {
  videoId: string
  title: string
  onClose?: () => void
}

export function VideoPlayer({ videoId, title, onClose }: VideoPlayerProps) {
  // Helper to extract video ID if a full URL is passed
  const getEmbedUrl = (id: string) => {
    if (id.includes("youtube.com") || id.includes("youtu.be")) {
      const url = new URL(id)
      let vid = ""
      if (id.includes("youtu.be")) {
        vid = url.pathname.slice(1)
      } else {
        vid = url.searchParams.get("v") || ""
      }
      return `https://www.youtube.com/embed/${vid}?modestbranding=1&rel=0`
    }
    return `https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-[#05080A] rounded-2xl overflow-hidden border border-[#1A2328] shadow-[0_0_50px_-12px_rgba(0,229,212,0.2)]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-[#00E5D4] hover:text-[#05080A] transition-all"
        >
          <X size={20} />
        </button>
        <div className="aspect-video w-full">
          <iframe
            src={getEmbedUrl(videoId)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
