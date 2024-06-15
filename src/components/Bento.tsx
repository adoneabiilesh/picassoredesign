import React from 'react'
import { BentoGrid } from './ui/Bentogrid'
import { BentoGridItem } from './ui/Bentogrid'
import { gridItems } from '@/data/data';
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';

const Bento = () => {
  return (
    <section id='about' className='relative bg-red-800'>
       
      
            <BentoGrid>
     {gridItems.map(({id, title, description, className, 
     imgClassName, titleClassName, img, spareImg}) => (
      <BentoGridItem
      id={id}
      key={id}
      title={title}
      description={description}
      className={className}
      img={img}
      imgClassName={imgClassName}
      titleClassName={titleClassName}
      spareImg={spareImg}
      />
     ))}
      </BentoGrid>
      </section>
  )
}

export default Bento
