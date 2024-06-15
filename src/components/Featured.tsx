import React from 'react'

const Featured = () => {
  return (
    <div className='w-full h-screen py-10 uppercase bg-black'>
        <div className='w-full px-10 border-b-[1px] border-zince-800 pb-4' >
            <h1 className='uppercase text-6xl tracking-tighter font-[NeueHaasGroteskDispPro]'>  
            Sezione Elenco Caratteristiche</h1>
            <div className='cards w-full flex sm:gap-10 gap-5 mt-10 overflow-hidden'>
                <div className="cardcontainer w-full border-solid  border-3 border-zinc-300  h-[70vh] bg-none rounded-3xl">
                <h2 className='p-10'>Consulenza</h2>
                <p>Descrizione: Valutazioni di sicurezza personalizzate e raccomandazioni su misura per le esigenze della tua azienda.</p>
                </div>
                <div className="cardcontainer w-full h-[70vh]  rounded-3xl">
                <h2 className='p-10'>Formazione sulla Sicurezza Antincendio</h2>
                <p>Programmi di formazione completi per garantire che il tuo team sia preparato per qualsiasi emergenza antincendio.</p>
                </div>
                <div className="cardcontainer w-1/2 h-[70vh] rounded-3xl">
                <h2 className='p-10'>Valutazione dei Rischi</h2>
                <p>Valutazioni dettagliate per identificare e mitigare i potenziali pericoli sul posto di lavoro.</p>
                </div>
                <div className="cardcontainer w-1/2 h-[70vh]  rounded-3xl">
                <h2 className='p-10'>Audit di Conformità</h2>
                <p>Audit regolari per garantire che la tua azienda soddisfi tutte le normative e gli standard di sicurezza.</p>
                </div>
                <div className="cardcontainer w-1/2 h-[70vh]  rounded-3xl">
                <h2 className='p-10'>Pianificazione delle Emergenze</h2>
                <p>Sviluppo di piani di risposta alle emergenze personalizzati per vari scenari.</p>
                </div>
                <div className="cardcontainer w-1/2 h-[70vh] rounded-3xl">
                <h2 className='p-10'>Installazione di Attrezzature di Sicurezza</h2>
                <p>nstallazione e manutenzione professionale delle attrezzature di sicurezza essenziali.
                </p>
                </div>
                <div className="cardcontainer w-1/2 h-[70vh]  rounded-3xl">
                <h2 className='p-10'>Investigazione degli Incidenti</h2>
                <p>Indagini e analisi approfondite degli incidenti sul posto di lavoro per prevenire futuri eventi.</p>
            </div>
            <div className="cardcontainer w-1/2 h-[70vh]  rounded-3xl">
                <h2 className='p-10'>Corsi</h2>
                <p>Corsi di formazione accessibili e flessibili per un&aposeducazione continua sulla sicurezza.</p>
           
        </div>
        </div>
        </div>
        </div>
  )
}

export default Featured
