import React from 'react'
import {motion} from 'framer-motion'


const Marque = () => {
  return (
    <div className='w-full p-6vh bg-blue-600'>
    <div className='text border-t-2 border-b-2 border-zince-300 flex whitespace-nowrap md:overflow-hidden pr-10'>
    <motion.h1 
    initial={{x:"0"}}
    animate={{x:"-100%"}} 
    transition={{repeat: Infinity, ease:"linear", duration:10}}className='text-[15vw] leading none capitalize pt-10'>
      HACCP DVR </motion.h1>
    </div>
    </div>
  )
}

export default Marque