import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-red-800 p-4 md:p-4">
      <div className="mx-10 max-w-5xl">
        <Link
          heading="HACCP"
          subheading="AIl nostro sistema HACCP garantisce la sicurezza alimentare gestendo preventivamente i rischi nella produzione, lavorazione e distribuzione di alimenti. Identifica, valuta e controlla i rischi significativi per assicurare conformità normativa e prodotti di alta qualità."
          imgSrc="/5.jpg"
          href="#"
        />
        <Link
          heading="DVR"
          subheading="Il Documento di Valutazione dei Rischi (DVR) è essenziale per la sicurezza dei lavoratori. Picasso Sicurezza 2.0 offre consulenza per la redazione del DVR, identificando e valutando i rischi e proponendo misure preventive per ridurli, garantendo la conformità normativa."
          imgSrc="/dvr.jpg"
          href="#"
        />
        <Link
          heading="Antincendio"
          subheading="La sicurezza antincendio è fondamentale per prevenire danni a persone e beni. Picasso Sicurezza 2.0 offre soluzioni complete, tra cui piani di evacuazione, corsi di formazione per addetti antincendio e manutenzione di dispositivi. Il nostro obiettivo è garantire un ambiente di lavoro sicuro e pronto a gestire emergenze."
          imgSrc="/4.jpg"
          href="#"
        />
        <Link
          heading="PRIMO SOCCORSO"
          subheading="La formazione di primo soccorso è cruciale per garantire che i dipendenti siano pronti a intervenire in caso di emergenza. Picasso Sicurezza 2.0 offre corsi conformi alle normative vigenti, fornendo le competenze necessarie per gestire situazioni di emergenza e stabilizzare le condizioni di salute dei lavoratori in attesa dei soccorsi professionali."
          imgSrc="/primo.png"
          href="#"
        />
        <Link
          heading="DISINFESTAZIONI"
          subheading="La presenza di infestanti può rappresentare un serio problema per la sicurezza e l'igiene sul lavoro. Picasso Sicurezza 2.0 offre servizi di disinfestazione professionale per garantire un ambiente di lavoro pulito e sicuro, eliminando infestazioni e prevenendo future contaminazioni. Utilizziamo metodi efficaci e sicuri per proteggere la salute dei lavoratori e mantenere elevati standard igienici."
          imgSrc="/6.jpg"
          href="#"
        />

         <Link
          heading="Personale Qualificato"
          subheading="Avere personale qualificato è fondamentale per garantire la sicurezza e l'efficienza operativa. Picasso Sicurezza 2.0 fornisce personale altamente qualificato e formato per svolgere attività legate alla sicurezza sul lavoro, dalla gestione delle emergenze alla manutenzione delle attrezzature. Il nostro team di esperti è a disposizione per supportare le aziende nel garantire un ambiente di lavoro sicuro e conforme alle normative."
          imgSrc="/7.jpg"
          href="#"
          />

      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <span
         className="relative z-10 block text-4xl transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl uppercase"
        >
         {heading} 
        </span>
        <span className="relative z-10 mt-2 block text-base text-whtie transition-colors duration-500 group-hover:text-neutral-200 uppercase">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-70%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-18.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-100 w-100 rounded-lg object-cover md:h-80 md:w-80"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};