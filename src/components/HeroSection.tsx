import React, {useState, useRef} from "react";
import Header from "./Header";

const HeroSection = () => {
 

  return (
    
    <section className="relative h-full w-full">
      <Header />
    <div className="relative h-screen w-screen inset-0 -z-10 ">

      <video className="w-screen h-full fixed object-cover" autoPlay muted loop>
        <source src="\1.mp4" type="video/mp4" />
      </video>
    </div>
   
    
    <div className="absolute bottom-0 left-0 w-full font-bold text-2xl p-4">
        <h1 className="text-8xl font-bold">PICASSO</h1>
        <h1 className="text-8xl font-bold">SERVICES</h1>
      </div>
  </section>
  
  );
};

const HighlightItem: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="uppercase text-xl">{title}</span>
      <p className="text-2xl">{content}</p>
    </div>
  );
};

export default HeroSection;
