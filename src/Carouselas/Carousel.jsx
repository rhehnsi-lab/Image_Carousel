import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

function Carousel({ images, intervalSeconds = 3 }) {
   const [selected, setSelected] = useState(0);

   function move(num) {
      setSelected((prev) => (prev + num + images.length) % images.length);
   }

   useEffect(() => {
      if (images.length === 0) return;
      const timer = setInterval(() => {
         setSelected((prev) => (prev + 1) % images.length);
      }, intervalSeconds * 1000);
      return () => clearInterval(timer);
   }, [selected, intervalSeconds, images.length]);

   if (images.length === 0) return null;

   return (
      <div className="carousel">
         <button className="carousel-arrow prev" onClick={() => move(-1)} aria-label="הקודם">
            ‹
         </button>

         <CarouselItem
            key={selected}
            src={images[selected]}
            alt={`תמונה ${selected + 1}`}
         />

         <button className="carousel-arrow next" onClick={() => move(1)} aria-label="הבא">
            ›
         </button>

         <div className="carousel-dots">
            {images.map((_, index) => (
               <button
                  key={index}
                  className={`carousel-dot${index === selected ? " active" : ""}`}
                  onClick={() => setSelected(index)}
                  aria-label={`מעבר לשקופית ${index + 1}`}
               />
            ))}
         </div>
      </div>
   );
}

export default Carousel;