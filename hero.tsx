import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenModal?: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 md:pt-20 md:pb-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,255,0,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 md:space-y-6 relative"
        >
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-display font-black uppercase leading-[0.9] tracking-tighter text-white relative z-10">
            ПОЧУВСТВУЙ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              ИМПУЛЬС
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-lg font-light font-sans">
            Больше, чем просто движения. Это энергия. Это твое время сиять. Присоединяйся и почувствуй наш ИМПУЛЬС.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-2 md:pt-4 w-full md:w-auto">
            <Button 
              onClick={onOpenModal}
              className="bg-primary text-black hover:bg-white hover:text-black text-sm md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-none font-bold uppercase tracking-wider skew-x-0 md:skew-x-[-10deg] transition-all hover:skew-x-0 w-full md:w-auto"
            >
              НАЧАТЬ ТАНЦЕВАТЬ
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-sm md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-none font-bold uppercase tracking-wider skew-x-0 md:skew-x-[-10deg] transition-all hover:skew-x-0 w-full md:w-auto" asChild>
              <a href="#schedule">
                РАСПИСАНИЕ <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 animate-float">
          </div>
          
          {/* Decorative circle behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-white/10 animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-primary/20 animate-spin-reverse-slow"></div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
