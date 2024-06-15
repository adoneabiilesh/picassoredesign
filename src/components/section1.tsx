import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';


const Section1: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div ref={container} className='h-screen overflow-hidden'>
      <motion.div style={{ y }} className='relative h-full w-screen'>
        <video 
        src="/bg_app.mp4" autoPlay muted  style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  );
};

export default Section1;
