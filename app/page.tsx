import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { CoursesSection } from "@/components/courses-section"
import { EarlyAccessForm } from "@/components/early-access-form"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FutureSchoolSection } from "@/components/future-school-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  const showCourses = false // Toggle for later use

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        {showCourses ? <CoursesSection /> : <EarlyAccessForm />}
        <TestimonialsSection />
        <FutureSchoolSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
