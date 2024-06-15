import React from 'react'

const Header = () => {
  return (
    <div className='w-full fixed bg-red-700 h-35'>
        <div className='relative justify-between flex flex-row px-4'>
        <a href="/">Home</a>  
      
            <a href="/aboutus"> Chi Siamo</a>
            <a href="/services">Servizi</a>
           
            <a href="/contact">Contatti </a>  
            
        </div>      
    </div>
  )
}

export default Header
