import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ]

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#courses", label: "Courses" },
    { href: "#about", label: "About Us" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-[#00E5D4] uppercase">EDUNETIC</span>
              <span className="text-[#00E5D4] uppercase"> INDIA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The Future of Learning - Transforming education through AI-powered innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Mail size={16} className="mt-0.5 text-[#00E5D4] flex-shrink-0" />
                <span>eduneticindia@zohomail.in</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Phone size={16} className="mt-0.5 text-[#00E5D4] flex-shrink-0" />
                <span>+91 6394397986</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-0.5 text-[#00E5D4] flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Edunetic India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
