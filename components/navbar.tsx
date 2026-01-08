"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
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
    { href: "#courses", label: "Courses" },
    { href: "#about", label: "About Us" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0B1215]/80 backdrop-blur-xl border-b border-[#00E5D4]/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 group">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-[#00E5D4] cyan-glow">Edunetic</span>
              <span className="text-white"> India</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#94A3B8] hover:text-[#00E5D4] transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 transition-all duration-300 font-bold px-6 rounded-full shadow-[0_0_20px_rgba(0,229,212,0.2)]"
            >
              <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-muted hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-primary text-background hover:bg-primary/90 neon-glow font-semibold">
              <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
