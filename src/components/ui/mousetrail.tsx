import { useAnimate } from "framer-motion";
import React, { MouseEventHandler, ReactNode, useRef } from "react";
import { FiMousePointer } from "react-icons/fi";
import Image from "next/image";

export const Trail = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "https://lh3.googleusercontent.com/p/AF1QipMtu0ZKoopJbfIzliOvJ6Kp26_UNHHB59I3Op1B=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipN7sOrAas9J2CRswiMJk4Z35wm2XP6Tdmrn5aG2=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipM-yPxLgLV8h6oqdVxpmijz7mSsq7Cji8qzqHFk=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMRkfaM0sDWD94HhUwJORa9K58aW7P2depge6Jw=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipNYOSVSlHbA80UtQTrEHHjiUPPCcTUaoHxNuvgF=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMP9y9QBALfPc5syXd_DOWFs0GoBcIgt3N_RYwd=s1360-w1360-h1020",
        "https://lh5.googleusercontent.com/p/AF1QipMwo7TF60GaDqgOcm7gLXyXSXTXybgCI7yHaBCd=w141-h176-n-k-no-nu",
        "https://lh3.googleusercontent.com/p/AF1QipOZbSMETMuLWfd9DltJlSBq391W4uOiy3LUn8YJ=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipM6Z_iegX-hl1eRnvGNnOCuQsUu9T3udwGFd1PV=s1360-w1360-h1020",
        "https://lh5.googleusercontent.com/p/AF1QipMhJDpZJDw84QT1j71xrlUcZNi9gujqr7XRACnz=w141-h101-n-k-no-nu",
        "https://lh3.googleusercontent.com/p/AF1QipN4LeKWARMT245u0zWh_1grOm3gJanOup8tqZ4N=s1360-w1360-h1020",   
      ]}
    >
      <section className="grid h-screen w-full place-content-center bg-red-800">
        
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}: {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;

    if (el) {
      el.style.top = `${lastRenderPosition.current.y}px`;
      el.style.left = `${lastRenderPosition.current.x}px`;
      el.style.zIndex = imageRenderCount.current.toString();

      const rotation = Math.random() * rotationRange;

      animate(
        selector,
        {
          opacity: [0, 1],
          transform: [
            `translate(-50%, -35%) scale(0.5) ${
              imageIndex % 2
                ? `rotate(${rotation}deg)`
                : `rotate(-${rotation}deg)`
            }`,
            `translate(-50%, -50%) scale(1) ${
              imageIndex % 2
                ? `rotate(-${rotation}deg)`
                : `rotate(${rotation}deg)`
            }`,
          ],
        },
        { type: "spring", damping: 30, stiffness: 200 }
      );

      animate(
        selector,
        {
          opacity: [1, 0],
        },
        { ease: "linear", duration: 10, delay: 40}
      );

      imageRenderCount.current += 1;
    }
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <Image
          className="pointer-events-none absolute left-0 top-0 h-80 w-auto rounded-lg"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
          width={400}
          height={400}
          priority={index === 0}
        />
      ))}
    </div>
  );
};

export default Trail;
