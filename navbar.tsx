import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenModal?: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "О НАС", href: "#about" },
    { name: "ФИЛИАЛЫ", href: "#branches" },
    { name: "ПЕДАГОГИ", href: "#instructors" },
    { name: "РАСПИСАНИЕ", href: "#schedule" },
    { name: "ТАРИФЫ", href: "#rates" },
    { name: "ОТЗЫВЫ", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-display font-black tracking-tighter uppercase italic"
            >
              <span className="text-white">Impulse</span>
              <span className="text-primary">.</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md font-medium font-sans uppercase tracking-wide text-[15px]"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={onOpenModal}
                className="bg-primary text-black hover:bg-white hover:text-black font-bold uppercase tracking-wider rounded-none skew-x-[-10deg]"
              >
                Присоединиться
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white block px-3 py-2 text-base font-medium hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button 
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenModal) onOpenModal();
                }}
                className="w-full bg-primary text-black font-bold uppercase rounded-none"
              >
                Присоединиться
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
