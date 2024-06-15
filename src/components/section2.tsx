import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

const Section2: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className='relative flex items-center justify-center h-screen overflow-hidden'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
      <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div style={{ y }} className='relative w-full h-full'>
          <video src="/bg_app.mp4" autoPlay muted loop style={{ objectFit: "cover" }} />
        </motion.div>
      </div>
      </div>
  );
};

export default Section2;
<div className="absolute top-4 left-4 uppercase text-[#CBCABF]">
[Sicurezza, HACCP & Antincendio]
</div>