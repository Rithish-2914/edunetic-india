"use client"

import { useEffect, useState, useRef } from "react"

export function GlowingCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [angle, setAngle] = useState(0)

  // Refs for trail and smooth motion
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<{ x: number; y: number; opacity: number }[]>([])
  const requestRef = useRef<number>(null)
  const lastPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    const updatePosition = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e

      // Calculate angle based on movement for "rocket" orientation
      const dx = x - lastPos.current.x
      const dy = y - lastPos.current.y

      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const newAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
        setAngle(newAngle)
      }

      setPosition({ x, y })
      lastPos.current = { x, y }

      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement
      const isInteractive = target.closest("button, a, [role='button'], .course-card, .featured-course-card")
      setIsHovering(!!isInteractive)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const animate = () => {
      // Update trail data
      trailRef.current = [
        { x: lastPos.current.x, y: lastPos.current.y, opacity: 1 },
        ...trailRef.current.slice(0, 10), // Keep it short as requested
      ].map((p) => ({ ...p, opacity: p.opacity * 0.8 }))

      requestRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Jet Exhaust Trail */}
      {trailRef.current.map((point, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/20 blur-[2px]"
          style={{
            left: point.x,
            top: point.y,
            width: `${12 - i}px`,
            height: `${12 - i}px`,
            opacity: point.opacity * (isHovering ? 0.6 : 0.3),
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.1s ease",
          }}
        />
      ))}

      {/* Triangular Rocket Cursor */}
      <div
        ref={cursorRef}
        className="absolute transition-transform duration-75 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) rotate(${angle}deg) ${isClicked ? "scale(0.8)" : "scale(1)"}`,
        }}
      >
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_8px_oklch(0.85_0.18_190/0.6)]"
        >
          <path
            d="M10 0L20 24L10 18L0 24L10 0Z"
            fill="var(--primary)"
            style={{
              filter: isHovering ? "brightness(1.2)" : "none",
            }}
          />
        </svg>
      </div>
    </div>
  )
}
