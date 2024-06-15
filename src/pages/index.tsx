import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Section from "@/components/Section";
import Marque from "@/components/Marque";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Life from "@/components/life";
import Horizontalscroll from "@/components/ui/horizontalscroll";
import { HoverImageLinks } from "@/components/ui/hoverimage";
import Bento from "@/components/Bento";
import Count from "@/components/count";

import BgOverview from "@/../public/3.jpg";
import BgInterior from "@/../public/section5.jpg";
import BgCharging from "@/../public/section3.jpg";

import HeroSection from "@/components/HeroSection";

import Section2 from "@/components/section2";
import Footer from "@/components/Footer";
import { Hover } from "@/components/Hover";



export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <Testimonial />
      <Count />
      <Hover />
      <About />
      <Bento />
      <Section2 />
      <Horizontalscroll/>
      <Section
        image={BgInterior}
        tag=""
        title="La sicurezza non è un optional, è una priorità. Affidati a noi per proteggere il tuo ambiente di lavoro."
        description=""/>

      <Section
        image={BgOverview}
        tag=""
        title="Formazione su misura, consulenza esperta e gestione efficace dei rischi: siamo il partner ideale per la tua azienda."
        description="" 
        />
      <Life />
      <Section
        image={BgCharging}
        tag=""
        title="Con la nostra app, gestisci corsi, documenti e certificati ovunque tu sia. La sicurezza è a portata di mano."
        description=""
      
      />
  
      <Footer/>
    </main>
  );
}
