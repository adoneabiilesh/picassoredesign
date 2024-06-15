import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Horizontalscroll = () => {
  return (
    <div className="bg-red-800">
      <div className="flex flex-col h-48 items-right justify-right gap-12 overflow-hidden font-bold">
        <span className="sm:text-7xl text-6xl uppercase p-10">
        aziende 
         <span className="sm:text-7xltext-4xl  uppercase p-10">
        con cui
        <span className="sm:text-7xl text-4xl uppercase p-10">
           lavoriamo
           </span>
           </span>
          </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-70 items-center justify-start">
        <p className="uppercase text-lg px-4 mb-10 ">
        Indipendentemente dal settore, ci impegniamo a fornire servizi di alta qualità e soluzioni personalizzate per ogni cliente.<br/> Lavoriamo a stretto contatto con ogni azienda per capire le loro esigenze specifiche e sviluppare piani di sicurezza che migliorino la protezione dei lavoratori e la conformità normativa.<br/>
Affidarsi a noi significa scegliere un partner affidabile e competente, dedicato a migliorare la sicurezza e la salute sul lavoro per tutte le aziende con cui collaboriamo. Siamo qui per supportarti in ogni passo del tuo percorso professionale, garantendo che la tua azienda operi in un ambiente sicuro e conforme.
        </p>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-red-800">
      <div className="sticky top-0 flex h-screen items-start overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[600px] w-[450px] overflow-hidden border-2 "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-600 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10  place-content-center flex flex-col">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black uppercase  backdrop-blur-lg">
          {card.title}</p>
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl  uppercase">
          {card.description}
          </p>
          
        
      </div>
    </div>
  );
};

export default Horizontalscroll;

type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "",
    title: "Ristoranti e Bar",
    description: "Collaboriamo con numerosi ristoranti e bar per garantire che le loro pratiche di sicurezza alimentare siano sempre allineate con le normative HACCP. Offriamo formazione continua per il personale e assistenza nella gestione dei documenti necessari per mantenere elevati standard di igiene e sicurezza.",
    id: 1,
  },
  {
    url: "",
    title: "Industria Alimentare",
    description: "Le aziende dell'industria alimentare si affidano a noi per la gestione del Documento di Valutazione dei Rischi (DVR) e per la consulenza su tutte le questioni relative alla sicurezza sul lavoro. La nostra competenza aiuta a mantenere gli ambienti di lavoro sicuri e conformi alle leggi vigenti.",
    id: 2,
  },
  {
    url: "",
    title: "Settore della Logistica",
    description: "Per le aziende di logistica, offriamo soluzioni per la gestione della sicurezza sul lavoro, inclusi corsi di primo soccorso e consulenze per la prevenzione degli incendi. Questo garantisce che i magazzini e i centri di distribuzione operino in modo sicuro ed efficiente.",
    id: 3,
  },
  {
    url: "",
    title: "Strutture Sanitarie",
    description: "Collaboriamo con ospedali, cliniche e altre strutture sanitarie per fornire formazione specifica al personale medico e amministrativo. Offriamo supporto nella gestione delle emergenze e nella pianificazione della sicurezza, assicurando un ambiente sicuro per pazienti e dipendenti.",
    id: 4,
  },
  {
    url: "",
    title: "Uffici e Studi Professionali",
    description: "Per gli uffici e gli studi professionali, offriamo servizi di valutazione dei rischi e consulenza sulla sicurezza, oltre a corsi di formazione su misura per il personale. Aiutiamo queste aziende a creare un ambiente di lavoro sicuro e produttivo.",
    id: 5,
  },
  {
    url: "",
    title: "Aziende di Manutenzione e Servizi",
    description: "Collaboriamo con aziende che offrono servizi di manutenzione e pulizia, fornendo formazione specifica sulla sicurezza e supporto nella gestione dei documenti necessari per conformarsi alle normative vigenti.",
    id: 6,
  },
];