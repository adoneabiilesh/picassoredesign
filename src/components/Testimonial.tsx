'use client'

import React, {useRef, useState, useEffect} from 'react'

import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className='w-full h-full'>
      <div className=" bg-red-800 pt-10">
<div className="relative w-full gap-8 sm:pb-10 ">
  <h1 className="text-5xl max-w-[20ch] sm:text-8xl bottom-5 left-5 font-[NeueHaasGroteskDisp_Pro]  masker text-[#CBCABF] tracking-tight px-10">
    Garantiamo la tua sicurezza, ovunque tu sia!
  </h1>
  <div className='px-14 py-14 bottom-4 left-4 '>
  <h2 className="text-4xl sm:text-6xl bottom-5 left-5 font-[NeueHaasGroteskDisp_Pro]  mt-10  masker text-[#CBCABF] tracking-tight">Chi Siamo Picasso si dedica a fornire soluzioni di sicurezza di alta qualità. 
  Il nostro team di esperti assicura che la tua attività rispetti tutte le normative e mantenga un ambiente di lavoro sicuro.
  </h2>
  </div>
  <p className="text-xl uppercase font-extralight px-14">
    Soluzioni Complete per la Sicurezza sul Lavoro
  </p>
  </div>
</div>

<div className='grid grid-cols-1 gap-12 xl:grid-cols-3 border-2'>
  <div className=' uppercase text-md'>Contatta il nostro professionista</div>
  <div className=' uppercase text-md'>Completa il tuo corso</div>
  <div className=' uppercase text-md'>Ottieni il tuo certificato e la tua consulenza specialistica</div>
</div>


    </section>
  
  );
};

export default Testimonial;
