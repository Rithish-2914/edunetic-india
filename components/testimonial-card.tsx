import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  rating: number
  text: string
  image?: string
}

export function TestimonialCard({ name, role, rating, text, image }: TestimonialCardProps) {
  return (
    <Card className="bg-card border border-black/10 dark:border-border/30 flex-shrink-0 w-[340px] hover:border-[#00E5D4]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
      <CardContent className="p-6 space-y-4">
        {/* Star Rating */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} className="text-[#00E5D4] fill-[#00E5D4]" />
          ))}
          {Array.from({ length: 5 - rating }).map((_, i) => (
            <Star key={`empty-${i}`} size={16} className="text-muted-foreground/30" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-muted-foreground leading-relaxed text-sm min-h-[60px]">{text}</p>

        {/* User Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-border/30">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-primary font-semibold text-sm">{name.charAt(0)}</span>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm">{name}</h4>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
