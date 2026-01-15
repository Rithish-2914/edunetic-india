"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { loginWithEmail, signInWithGoogle, signInWithApple } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await loginWithEmail(formData.email, formData.password);
      toast.success("Welcome back!");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'apple') => {
    try {
      if (provider === 'google') await signInWithGoogle();
      else await signInWithApple();
      toast.success("Logged in successfully!");
      router.push("/");
    } catch (error: any) {
      toast.error(error.message || "Social login failed");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-12 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E5D4]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md relative z-10"
        >
          <Card className="bg-card/40 backdrop-blur-xl border-black/10 dark:border-white/5 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-4xl font-black tracking-tight uppercase">
                Welcome <span className="text-[#00E5D4]">Back</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Continue your AI innovation journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest ml-1">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-black/10 dark:border-white/10 h-12 rounded-xl focus:border-[#00E5D4] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between ml-1">
                    <Label htmlFor="password" title="Password" className="text-xs font-bold uppercase tracking-widest">Password</Label>
                    <Link href="#" className="text-[10px] uppercase font-bold text-[#00E5D4] hover:underline">Forgot?</Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="bg-background/50 border-black/10 dark:border-white/10 h-12 rounded-xl focus:border-[#00E5D4] transition-all"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black h-12 rounded-xl text-lg uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,229,212,0.2)] hover:shadow-[0_0_30px_rgba(0,229,212,0.4)]"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-black/5 dark:border-white/5"></span></div>
                <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest"><span className="bg-card px-3 text-muted-foreground">Or connect with</span></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={() => handleSocialLogin('google')} className="border-black/10 dark:border-white/10 hover:border-[#00E5D4]/50 h-11 rounded-xl gap-2 font-bold text-xs uppercase transition-all">
                  <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" /> Google
                </Button>
                <Button variant="outline" onClick={() => handleSocialLogin('apple')} className="border-black/10 dark:border-white/10 hover:border-[#00E5D4]/50 h-11 rounded-xl gap-2 font-bold text-xs uppercase transition-all">
                   Apple
                </Button>
              </div>

              <p className="text-center text-xs text-muted-foreground font-medium pt-2">
                New to Edunetic?{" "}
                <Link href="/signup" className="text-[#00E5D4] hover:underline font-bold uppercase tracking-wider ml-1">Create Account</Link>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
