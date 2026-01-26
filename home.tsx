import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Branches from "@/components/branches";
import Instructors from "@/components/instructors";
import Directions from "@/components/Directions";
import Schedule from "@/components/schedule";
import Rates from "@/components/rates";
import Reviews from "@/components/reviews";
import Achievements from "@/components/achievements";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import TrialModal from "@/components/trial-modal";
import textureImage from "@assets/generated_images/Abstract_dark_digital_texture_with_lime_glitches_ee53c4c7.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | undefined>(undefined);

  const handleOpenModal = (info?: string) => {
    setSelectedClass(info);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenTrialModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        handleOpenModal();
        sessionStorage.setItem("hasSeenTrialModal", "true");
      }, 5000); // Show after 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url(${textureImage})`, backgroundSize: 'cover' }}
      ></div>
      
      <TrialModal open={isModalOpen} setOpen={setIsModalOpen} selectedClass={selectedClass} />
      <Navbar onOpenModal={() => handleOpenModal()} />
      <main className="relative z-10">
        <Hero onOpenModal={() => handleOpenModal()} />
        <About />
        <Branches />
        <Instructors />
        <Directions />  
        <Schedule onOpenModal={handleOpenModal} />
        <Rates onOpenModal={handleOpenModal} />
        <Reviews />
        <Achievements />
        <FAQ />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
