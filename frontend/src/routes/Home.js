import React, { useState, useEffect } from 'react';
import Slide from '../components/Slide';

export default function Home() {
    const [slides, setSlides] = useState([{id: 0, components: []}]);
    const [slidesSize, setslidesSize] = useState(0);
    const [head, setHead] = useState(0);
    const [presentationMode, setPresentationMode] = useState(false);

    useEffect(() => {

    }, [slides]);

    const addSlide = () => {
        const newSize = slidesSize + 1;
        setslidesSize(newSize);
        setSlides(slides.concat({id: {newSize}, components: []}));
    }

    const goPresentationMode = () => {
        setPresentationMode(true);
    }

    const goEditMode = () => {
        setPresentationMode(false);
    }

    return (
        <div className="home">
            <button className="addSlide" onClick= {addSlide} >Add Slide </button>
            <button className="setPresentation" onClick={goPresentationMode} >Presentation Mode</button>
            <button className="editPresentation" onClick={goEditMode} >Edit Mode</button>
            <div className="slidesWrapper">
                {slides.map((slide) => {
                    if (!presentationMode) {
                        return (
                            <Slide 
                                id={slide.id} 
                                components={slide.components} 
                                presentationMode={false} />
                        );
                    } else {
                        return (
                            <Slide 
                                id={slide.id} 
                                components={slide.components} 
                                presentationMode={true} />
                        );
                    }
                })}
            </div>
        </div>
    );
}