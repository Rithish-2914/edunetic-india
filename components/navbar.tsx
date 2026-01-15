"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { motion, AnimatePresence } from "framer-motion"

import { useAuth } from "@/context/auth-context"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const { user, logout } = useAuth()

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
    // If it's an external link or a full page navigation (not a hash link)
    if (!href.startsWith("#")) {
      setIsMobileMenuOpen(false)
      return // Allow default navigation for non-hash links
    }

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
      router.push(`/${href}`)
    }
  }

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#courses", label: "Courses" },
    { href: "/#about", label: "About Us" },
    { href: "/#team", label: "Team" },
    { href: "/#contact", label: "Contact" },
  ]

  const navContent = (
    <div className="flex items-center gap-12 w-full">
      <Link href="/" onClick={() => { if (pathname === "/") window.location.reload(); }} className="flex items-center gap-2 group shrink-0">
        <motion.img 
          whileHover={{ rotate: 10, scale: 1.1 }}
          src="/logo.png" 
          alt="Edunetic Logo" 
          className="w-8 h-8 object-contain transition-all" 
        />
        <div className="text-xl font-bold tracking-tight">
          <span className="text-[#00E5D4] dark:text-[#00E5D4] uppercase transition-all duration-300">EDUNETIC INDIA</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6 flex-grow justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="relative text-foreground/70 dark:text-foreground/70 hover:text-[#00E5D4] dark:hover:text-[#00E5D4] text-xs font-black uppercase tracking-widest transition-colors group whitespace-nowrap"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00E5D4] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Theme Toggle & Mobile Menu Toggle */}
      <div className="flex items-center gap-3 shrink-0 ml-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-slate-500 dark:text-[#8E9BA4] hover:text-[#00E5D4] transition-all duration-300"
        >
          {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
        </Button>
        
        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden w-8 h-8"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
    </div>
  )

  const authContent = (
    <div className="fixed top-6 right-8 z-60 hidden lg:block">
      {user ? (
        <div className="flex items-center gap-4 bg-white/80 dark:bg-[#0B1215]/80 backdrop-blur-xl p-2 rounded-full border border-black/10 dark:border-white/10 shadow-2xl">
          <Button 
            asChild
            variant="ghost" 
            className="text-foreground/70 dark:text-foreground/70 hover:text-[#00E5D4] text-[10px] uppercase font-bold tracking-widest h-8 px-4"
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button 
            variant="ghost" 
            onClick={logout}
            className="text-foreground/70 dark:text-foreground/70 hover:text-[#00E5D4] text-[10px] uppercase font-bold tracking-widest h-8 px-4"
          >
            Logout
          </Button>
          <Avatar className="h-8 w-8 border border-[#00E5D4]/20 shadow-[0_0_15px_rgba(0,229,212,0.1)]">
            <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
            <AvatarFallback className="bg-slate-100 dark:bg-[#1A2328] text-[#00E5D4] text-[10px] font-bold">
              {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 transition-all duration-300 font-black text-[10px] uppercase tracking-wider px-6 h-10 rounded-full shadow-[0_0_30px_rgba(0,229,212,0.4)]"
          >
            <Link href="/login">Login/Signup</Link>
          </Button>
        </motion.div>
      )}
    </div>
  )

  return (
    <>
      {authContent}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-start px-8 pointer-events-none">
        <nav
          className={`transition-all duration-500 rounded-full border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden pointer-events-auto ${
            isScrolled 
              ? "bg-white/80 dark:bg-[#0B1215]/80 backdrop-blur-xl py-2 px-6 w-fit" 
              : "bg-white/40 dark:bg-[#0B1215]/40 backdrop-blur-md py-3 px-8 w-fit"
          }`}
        >
            {navContent}

          {/* Mobile Login (Inside menu) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 space-y-4 pb-4 px-2"
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
                {user ? (
                  <>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#00E5D4]/20 text-[#00E5D4] hover:bg-[#00E5D4]/10 mb-2"
                    >
                      <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={logout}
                      className="w-full border-red-500/20 text-red-500 hover:bg-red-500/10"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                    <Button
                      asChild
                      className="w-full bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black"
                    >
                      <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Login/Signup</Link>
                    </Button>
                  )}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  )
}
