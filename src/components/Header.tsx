import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full fixed bg-red-700 h-35'>
        <div className='relative justify-between flex flex-row px-4'>
        <Link href="/">Home</Link>
      
            <Link href="/aboutus"> Chi Siamo</Link>
            <Link href="/services">Servizi</Link>
            <Link href="/contact">Contatti </Link>
        </div>      
    </div>
  )
}

export default Header
