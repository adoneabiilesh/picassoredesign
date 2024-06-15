import React from 'react';
import { FlipWords } from './ui/flip_words';
import Image from 'next/image';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';


const wordsArray = "1000 aziende hanno un contratto con noi".split(" ");

const About = () => {
  return (
    <div className='w-full p-10 bg-[url("/globe.png")] bg-right-top sm:backdrop-blur-xl min-h-screen overflow-hidden bg-red-800'>
      <div className='flex flex-col justify-right'>
        <FlipWords
          words={wordsArray}
          className="uppercase font-[Denton_Condensed_Light] text-lg "
        /> <FlipWords
          words={wordsArray}
          className="uppercase font-[Denton_Condensed_Light] text-lg "
        />
        
      </div>
      <div className='w-full mt-10 border-white border-2 sm:p-10'>
        <div className="textstructure">
          <div className='sm:justify-left items-start p-10 text-wrap'>
            <h1 className=' text-left sm:text-7xl text-3xl capitalize font-semibold tracking-tighter p-10'>
              Ti supportiamo come partner e mentore
            </h1>
            <p className='text-white  text-start sm:text-xl text-lg tracking-tight sm:max-w-[60ch]  px-10'>
              In qualità di partner e mentore, ci impegniamo a supportarti in ogni fase del tuo percorso professionale. Offriamo soluzioni su misura per le tue esigenze, con un approccio personalizzato che mira a massimizzare il tuo potenziale. Con la nostra esperienza e competenza, ti aiutiamo a superare le sfide e a raggiungere i tuoi obiettivi.
            </p>
            <div className='text-start'>
              <button className='p-10 border-3'>
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
