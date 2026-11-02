import React, { useState, useEffect } from "react";
import axios from "axios"; // ייבוא של ספריית axios
import Carousel from "../Carousel/Carousel";

function RecipesCarousel() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://dummyjson.com/recipes?limit=6&select=name,image";

    useEffect(() => {
     
        const controller = new AbortController();

        async function loadImages() {
            try {
                
                const response = await axios.get(url, { signal: controller.signal });

                const loadedImages = response.data.recipes.map((recipe) => recipe.image);

                setImages(loadedImages);
                setLoading(false);
            } catch (err) {
               
                if (axios.isCancel(err)) {
                    console.log("הבקשה בוטלה בהצלחה ");
                    return;
                }

                
                setError(err.message);
                setLoading(false);
            }
        }

        loadImages();

    
        return () => {
            console.log(" הבקשה מבוטלת");
            controller.abort();
        };
    }, []);

    if (loading) {
        return <div className="carousel-message">טוען...</div>;
    }

    if (error) {
        return <div className="carousel-message error">שגיאה: {error}</div>;
    }

    return <Carousel images={images} intervalSeconds={4} />;
}

export default RecipesCarousel;