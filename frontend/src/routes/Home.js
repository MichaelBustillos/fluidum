import React, { useState, useEffect } from 'react';
import Slide from '../components/Slide';

export default function Home() {
    const [slides, setSlides] = useState([{id: 0, components: []}]);
    const [slidesSize, setslidesSize] = useState(0);
    const [head, setHead] = useState(0);
    useEffect(() => {

    }, [slides]);

    const addSlide = () => {
        const newSize = slidesSize + 1;
        setslidesSize(newSize);
        setSlides(slides.concat({id: {newSize}, components: []}));
    }

    return (
        <div className="home">
            <button onClick= {addSlide} className="addSlide" >Add Slide </button>
            <div className="slidesWrapper">
                {slides.map((slide) => {
                    return (
                        <Slide 
                            id={slide.id} 
                            components={slide.components} />
                    );
                })}
            </div>
        </div>
    );
}