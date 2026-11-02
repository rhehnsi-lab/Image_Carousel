 import React, { useEffect,useState } from "react";
 import CarouselItem from "./CarouselItem";
 function Carousel({images,intervalSeconde=3}){
    const [selected, setSelcted] = useState(0)

 return(
    <> 
         {imeges.map((img,index)=>(
             < CarouselItem 
              key={index} src={img} alt={index}
               />))}
               
        </>
 )
}
export default Carousel