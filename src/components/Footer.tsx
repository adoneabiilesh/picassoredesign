import React from 'react'

const Footer = () => {
  return (
    <div className='relative h-screen flex flex-col w-full bg-red-800 overflow-hidden'>
        <div className='heading mt-10 '>
            <h1 className='sm:text-11xl text-8xl leading-none '>Picasso™</h1>
            <h1 className='sm:text-11xl text-8xl leading-none '>Services</h1>
          </div>
          <div className='p-5 text-xl'>
          <a href="">Links</a>
          </div>
          <div className='mt-10 px-5 w-screen overflow-hidden dets underline grid grid-cols-1 gap-12 xl:grid-cols-3'>
            <a href="https://www.facebook.com/Picasso8108/">Facebook</a>
            <a href="https://www.instagram.com/picassosicurezza2.0/">Instagram</a>
            <a href="https://www.google.com/maps/dir//picasso+sicurezza/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x132f5fd60d0fb059:0xf00bc5d07211bbe4?sa=X&ved=1t:3061&ictx=111">Location</a>
            <a href="">picassoantincendio@outlook.it</a>
          </div>
          <div className='absolute flex gap-5 bottom-0 left-0 mb-4 ml-4  text-lg font-[sans]'>
          <span>Via Ernesto Nathan 82-00146-Roma</span>
       <h3>3518644018</h3> 
       <h3>P.IVA 16929501001</h3> 
          </div>
        </div>
  )
}

export default Footer
