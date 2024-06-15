import { HoverEffect } from "./ui/cardhover";

export function Hover() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10">
        <h1 className="text-8xl font-medium p-10 justify-center bg- ">I servizi che offriamo sono illimitati</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "HACCP",
    description:
      "Sicurezza",
    link: "",
  },
  {
    title: "DVR",
    description:
      "Prevenzione",
    link: "",
  },
  {
    title: "Antincendio",
    description:
      "Protezione",
    link: "",
  },
  {
    title: "Primo Soccorso",
    description:
      "Prontezza",
    link: "",
  },
  {
    title: "Disinfestazioni",
    description:
      "Igiene",
    link: "",
  },
  {
    title: "Personale Qualificato",
    description:
      "Competenza",
    link: "",
  },
];

