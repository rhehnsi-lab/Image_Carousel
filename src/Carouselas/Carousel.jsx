 import React, { useEffect,useState } from "react";
 import CarouselItem from "./CarouselItem";
 function Carousel({images,intervalSeconde=3}){
 const [x,setEfect]=useEffect()

 return(
    <> 
         {imeges.map((img,index)=>(
             < CarouselItem 
              key={index} src={img} alt={index}
               />))}
        </>
 )
}