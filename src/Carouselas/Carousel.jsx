 import React, { useEffect,useState } from "react";
 import CarouselItem from "./CarouselItem";
 function Carousel({images,intervalSeconde=3}){
    const [selected, setSelcted] = useState(0)

 return(
    <> 
         {imeges.map((img,index)=>(
            index===selected&&
             < CarouselItem 
              key={index} src={img} alt={index+1}
               />))}
               {images.map((_,index)=>(
                  <button key={index} onClick={()=>setSelcted(index)}
                  className={index===selected&&"activ"}
                  />
               ))}
              
               
        </>
 )
}
export default Carousel