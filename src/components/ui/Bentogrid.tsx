import { cn } from "../../utils/cn";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}> <div className=" flex flex-col text-8xl mt-10 px-10 justify-center uppercase font-semibold">

        Scarica App
        </div>
        <Image
        className="p-4 justify-between rounded-full"
        src={"/scorpi.png"}
        alt="image"
        width={700}
        height={500}
        />
      
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string | React.ReactNode; 
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;

}) => {
  return (
    <div
      className={cn( 
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black border-red dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col mb-2 mt-10",
        
        className
      )}
      style={{
        background: 'globe.png'
      }}
    >
    <div className={" ${id==6} && flex justify-center h-full"}>

    </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
      
        </div>
        <div className="font-sans text-4xl uppercase mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-md dark:text-neutral-300">
          {description}
        </div>
      </div>
  );
};
