import React from 'react'
import { Trail } from './ui/mousetrail'

const Life = () => {
  return (
    <div className='w-full p-10'>
    <div className='w-full px-10 bg-red-800'>
   <h1 className='sm:text-6xl text-4xl  pt-10 capitalize' >Presenta i membri chiave del nostro team con foto, nomi, titoli e brevi biografie per umanizzare lazienda.
   </h1> 
   <p className=' text-xl mt-7 pb-10'>Life at Picasso
   Siamo una famiglia e siamo orgogliosi di ciò che realizziamo insieme. In quanto azienda di proprietà dei dipendenti, siamo motivati ​​dal nostro 
successo collettivo e siamo uniti nelle nostre sfide. Lavoriamo instancabilmente per superare le aspettative 
sui nostri progetti e ci impegniamo a rendere AJ il posto migliore in cui lavorare per tutti i nostri professionisti.
    </p> 
    </div>
    <Trail />
  </div>


    /*
    A True
Trade Partner
I have worked with the Anning-Johnson team on a handful of projects over the years.  They are a true trade partner working collaboratively towards the common end goal of delivering a successful project, starting in preconstruction and continuing through project completion. 
 I am always excited to have the AJ team on my projects.

– Ryan Gay, Senior Project Manager, Skanska USA Building, Inc.*/
  
  )
}

export default Life
  