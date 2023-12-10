import React, { useState } from 'react';

function ProyectoCard({ titulo, descripcion, imagen, url }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleVerAhoraClick = () => {
        window.open(url, '_blank');
    };

    return (
        <div
            className={`card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imagen} alt={''} className='imagen' />
            <div className='contenido'>
                <h2>{titulo}</h2>
                <p className='Parrafo-3'>{descripcion}</p>
                <button className='boton' onClick={handleVerAhoraClick}>
                    Ver Ahora
                </button>
            </div>
        </div>
    );
}

export default ProyectoCard;
