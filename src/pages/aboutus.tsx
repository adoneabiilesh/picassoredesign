'use client'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from '@/components/Header'


const aboutus = () => {
  return (
<div className='w-full min-h-screen bg-red-800'>
      <Header />
      <div className='w-full flex flex-colitems-start p-10'>
        <div className='relative w-full flex flex-col items-start p-10 mt-10'>
          
          <h1 className='text-9xl mb-5'>Chi Siamo</h1>
          <div className='w-full flex flex-row gap-10 items-start'>
          <p className=' text-xl mb-5'>
            <Link href="/contact" className=''>sapere di noi, per saperne di più</Link>
          </p>
          <p className='text-xl mb-5'>
            <Link href="/contact" className=''>azienda</Link>
          </p>
          <p className=' text-xl mb-5'>
            <Link href="/contact" className=''>e per te</Link>
          </p>
          </div>
          <p className=' text-3xl  text-start'>
            Azienda che si occupa di prevenzione incendi, sicurezza sul lavoro secondo il d.lgs 81/08 e igiene alimentare HACCP, consulenza alle imprese e formazione, corsi 81/08 e haccp e materiale antincendio ed antinfortunistico.
          </p>
          
        </div>
        <div className='w-full flex flex-col  mt-10'>
          <Image
            className='rounded-xl'
            src={'/team/bggif.gif'}
            alt='bggif'
            width={600}
            height={300}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutus
