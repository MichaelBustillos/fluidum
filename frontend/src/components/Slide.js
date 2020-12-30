import React, { useState } from 'react';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import '../styles/Slide.scss';

export default function Slide({ id, components, presentationMode }) {
    const [componentsList, setComponentsList] = useState(components);
    const [activeDrags, setActiveDrags] = useState(0);
    
    const onStartFunc = () => {
        setActiveDrags(activeDrags + 1);
    };

    const onStopFunc = () => {
        setActiveDrags(activeDrags - 1);
    };

    const dragHandlers = {onStart: onStartFunc, onStop: onStopFunc};


    const addComponent = () => {
        setComponentsList(componentsList.concat(1));
    }

    return (
        <div className="slide">
            <button className="addComponent" onClick={addComponent}>Add Component</button>
            {componentsList.map((component) => {
                if (presentationMode) {
                    return(
                        <Draggable onStart={() => false}>
                            <input />
                        </Draggable>
                    );
                } else {
                    return(
                        <Draggable {...dragHandlers}>
                            <input />
                        </Draggable>
                    );
                }
            })}
        </div>
    );
}