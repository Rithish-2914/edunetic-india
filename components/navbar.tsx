"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // <CHANGE> Added smooth scroll handler with cross-page navigation support
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    // If on home page and element exists, scroll to it
    if (pathname === "/" && targetElement) {
      const navbarHeight = 80 // Approximate navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    } else if (pathname !== "/") {
      // If on another page, navigate to home and then scroll
      router.push("/")
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          const navbarHeight = 80
          const targetPosition = element.offsetTop - navbarHeight
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "/meet-the-team", label: "Meet the Team" },
    { href: "#courses", label: "Courses" },
    { href: "#about", label: "About Us" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 bg-[#0B1215]/80 backdrop-blur-xl border-b border-[#00E5D4]/10 shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => window.location.reload()} className="flex items-center gap-2 group">
            <motion.img 
              whileHover={{ rotate: 10, scale: 1.1 }}
              src="/logo.png" 
              alt="Edunetic Logo" 
              className="w-10 h-10 object-contain transition-all" 
            />
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-[#00E5D4] uppercase transition-all duration-300">EDUNETIC INDIA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-foreground/70 hover:text-[#00E5D4] font-bold tracking-tight transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00E5D4] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-10 h-10 text-[#94A3B8] hover:text-[#00E5D4] hover:bg-[#00E5D4]/10 transition-colors"
            >
              {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 transition-all duration-300 font-bold px-6 rounded-full shadow-[0_0_20px_rgba(0,229,212,0.2)]"
              >
                <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Login/Signup</Link>
              </Button>
            </motion.div>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0B1215] border-b border-[#00E5D4]/10 py-4 px-4 space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-foreground/70 hover:text-[#00E5D4] font-bold tracking-tight transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
