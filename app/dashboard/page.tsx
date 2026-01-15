"use client";

import { useAuth } from "@/context/auth-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, profile, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      redirect("/login");
    }
  }, [user, loading]);

  if (loading) return null;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight">
                Welcome back, <span className="text-[#00E5D4]">{profile?.name || user.displayName || "Learner"}</span>
              </h1>
              <p className="text-muted-foreground mt-2">Ready to continue your "Learner to Creator" journey?</p>
            </div>
            <Button className="bg-[#00E5D4] text-[#05080A] hover:bg-[#00E5D4]/90 font-black uppercase tracking-wider h-12 rounded-xl px-8 transition-all shadow-[0_0_20px_rgba(0,229,212,0.2)]">
              Browse More Courses
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                <PlayCircle className="text-[#00E5D4] w-6 h-6" />
                Your Courses
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {/* Empty State for now */}
                <Card className="bg-card/40 backdrop-blur-xl border-dashed border-2 border-black/10 dark:border-white/10 rounded-3xl p-12 text-center">
                  <div className="bg-[#00E5D4]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="text-[#00E5D4] w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-2">No courses enrolled yet</h3>
                  <p className="text-muted-foreground mb-6">Explore our AI-powered courses and start creating today.</p>
                  <Button variant="outline" className="border-[#00E5D4] text-[#00E5D4] hover:bg-[#00E5D4] hover:text-[#05080A] font-bold uppercase rounded-xl h-11 px-8 transition-all">
                    Explore Courses
                  </Button>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                <Clock className="text-[#00E5D4] w-6 h-6" />
                Recent Activity
              </h2>
              <Card className="bg-card/40 backdrop-blur-xl border-black/10 dark:border-white/5 rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-background/50 border border-black/5 dark:border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#00E5D4] shadow-[0_0_10px_#00E5D4]" />
                        <span className="text-sm font-bold uppercase">Account Created</span>
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Just Now</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
