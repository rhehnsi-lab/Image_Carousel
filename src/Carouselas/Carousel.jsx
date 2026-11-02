import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

function Carousel({ images, intervalSeconds = 3 }) {
   const [selected, setSelected] = useState(0);

   function move(num) {
      setSelected((prev) => (prev + num + images.length) % images.length);
   }

   useEffect(() => {
      const timer = setInterval(() => {
         setSelected((prev) => (prev + 1) % images.length);
      }, intervalSeconds * 1000);

      return () => clearInterval(timer);
   }, [selected, intervalSeconds, images.length]);

   return (
      <>
         <button onClick={() => move(-1)}>{"<"}</button>

         {images.map((img, index) =>
            index === selected && (
               <CarouselItem key={index} src={img} alt={`תמונה ${index + 1}`} />
            )
         )}

         <button onClick={() => move(1)}>{">"}</button>

         {images.map((_, index) => (
            <button
               key={index}
               onClick={() => setSelected(index)}
               className={index === selected ? "active" : ""}
            />
         ))}
      </>
   );
}

export default Carousel;