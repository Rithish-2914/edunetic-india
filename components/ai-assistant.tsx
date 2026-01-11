"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { X, Send } from "lucide-react"

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Edunetic AI assistant. How can I help you today?", sender: "bot" },
  ])
  const [inputValue, setInputValue] = useState("")

  const mascotRef = useRef<HTMLDivElement>(null)
  const constraintsRef = useRef<HTMLDivElement>(null) // Added ref for boundary constraints

  // Look-at-cursor physics
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mascotRef.current) return

      const rect = mascotRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const angleX = (centerY - e.clientY) / 12
      const angleY = (e.clientX - centerX) / 12

      rotateX.set(Math.min(Math.max(angleX, -15), 15))
      rotateY.set(Math.min(Math.max(angleY, -20), 20))
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [rotateX, rotateY])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newUserMessage = { id: Date.now(), text: inputValue, sender: "user" }
    setMessages((prev) => [...prev, newUserMessage])
    setInputValue("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "I'm processing your request. How else can I assist with your Edunetic journey?",
          sender: "bot",
        },
      ])
    }, 1000)
  }

  return (
    <>
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[100]" />

      <motion.div
        ref={mascotRef}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.5} // Increased elasticity for a more professional "revert" bounce back effect
        dragMomentum={false} // Disabled momentum to ensure it stops exactly where released
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setTimeout(() => setIsDragging(false), 100)
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        onClick={() => !isDragging && setIsOpen(true)}
        className="fixed bottom-12 right-12 z-[100] cursor-grab group select-none flex flex-col items-center gap-3 pointer-events-auto"
      >
        <motion.div
          style={{ rotateX, rotateY, perspective: 1200, transformStyle: "preserve-3d" }}
          className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
        >
          {/* Enhanced Glow/Shadow Behind */}
          <motion.div className="absolute inset-0 bg-[#00E5D4]/10 rounded-full blur-3xl group-hover:bg-[#00E5D4]/20 transition-colors duration-700" />

          <div className="relative w-full h-[95%] bg-[#0B1215] rounded-[42%_42%_38%_38%] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Metallic Finish / Reflections */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/70" />

            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
            />

            {/* Face Panel Area */}
            <div className="absolute inset-[12%] rounded-[28%] bg-black/50 backdrop-blur-md border border-white/5 flex flex-col items-center justify-center gap-3">
              {/* Glowing Eyes - Pulse Animation */}
              <div className="flex gap-5">
                <motion.div
                  animate={{
                    scaleY: [1, 1, 0.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, times: [0, 0.95, 0.97, 1] }}
                  className="w-4 h-2 bg-[#00E5D4] rounded-full shadow-[0_0_15px_#00E5D4]"
                />
                <motion.div
                  animate={{
                    scaleY: [1, 1, 0.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, times: [0, 0.95, 0.97, 1], delay: 0.1 }}
                  className="w-4 h-2 bg-[#00E5D4] rounded-full shadow-[0_0_15px_#00E5D4]"
                />
              </div>

              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-10 h-0.5 bg-[#00E5D4]/30 rounded-full"
              />
            </div>

            {/* Premium Rim Lighting */}
            <div className="absolute inset-0 border-t border-l border-white/20 rounded-[inherit] pointer-events-none" />
          </div>

          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-5 bg-gradient-to-b from-[#1a2327] to-[#0B1215] border-x border-t border-white/10 rounded-t-full">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#00E5D4] rounded-full blur-[1px] shadow-[0_0_12px_#00E5D4]"
            />
          </div>
        </motion.div>

        <motion.div className="flex flex-col items-center">
          <span className="text-[#00E5D4] text-[11px] uppercase tracking-[0.25em] font-bold opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(0,229,212,0.4)] transition-all duration-300">
            Click me
          </span>
          <motion.div initial={{ width: 0 }} whileHover={{ width: "100%" }} className="h-px bg-[#00E5D4]/40 w-0 mt-1" />
        </motion.div>
      </motion.div>

      {/* Chat Panel - glassmorphism design */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[110]"
            />

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-background/80 backdrop-blur-3xl border-l border-white/10 z-[120] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1215] border border-white/10 flex items-center justify-center">
                    <div className="w-4 h-1 bg-[#00E5D4] rounded-full shadow-[0_0_10px_#00E5D4]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg tracking-tight">AI Assistant</h3>
                    <p className="text-[#00E5D4] text-[10px] uppercase tracking-widest font-bold opacity-80">
                      Neural Link Active
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
                {messages.map((msg) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#00E5D4] text-black font-semibold rounded-tr-none shadow-[0_5px_15px_rgba(0,229,212,0.2)]"
                          : "bg-[#161B22]/60 backdrop-blur-sm text-white border border-white/5 rounded-tl-none shadow-xl"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-8 border-t border-white/5">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full bg-[#0B1215] border border-white/10 rounded-xl py-4 px-6 pr-16 text-sm text-white focus:outline-none focus:border-[#00E5D4]/40 transition-colors shadow-inner"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 p-2.5 rounded-lg bg-[#00E5D4] text-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,229,212,0.3)]"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
