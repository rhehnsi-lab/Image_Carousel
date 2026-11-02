import React, { useState, useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import RecipesCarousel from "./RecipesCarousel/RecipesCarousel"
const images=[
"https://picsum.photos/id/10/600/400",
  "https://picsum.photos/id/20/600/400",
  "https://picsum.photos/id/30/600/400",
  ];
function App() {

  const [showRecipes, setShowRecipes] = useState(true);
  return (<div>
  <Carousel images={images} intervalSeconds={3} />;

</div>)}
export default App;