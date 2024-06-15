'use client'

import { HoverImageLinks } from '@/components/ui/hoverimage'
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const services = () => {
  return (
    <div className='w-full h-full'>
      <Header/>
      <div className=' w-screen bg-red-800 px-10'>
        <h1 className='text-7xl p-4 overflow-hidden font-medium'>
          SERVIZI OFFRIAMO
        </h1>
        <p className='px-4 text-2xl mb-10'>
          La nostra agenzia offre una vasta gamma di servizi per soddisfare le es<br/>
          <span className='text-white text-3xl'>Picasso Sicurezza e un eccellente azienda specializzata nella gestione della sicurezza e della salute sul lavoro a Roma. Con un impegno costante per l eccellenza, Picasso Sicurezza si è affermata come uno dei principali punti di riferimento per il settore. </span>
        </p>
        <div className='w-full h-full w-80vw h-100vh border-2 '>
          <HoverImageLinks />
        </div>
        <Footer/>
        </div>
      </div>
  )
}

export default services