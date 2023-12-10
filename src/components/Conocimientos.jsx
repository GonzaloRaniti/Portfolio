import React from 'react';
import '../App.css';

function Conocimientos() {
    return (
        <div className='Body Body-1' id="conocimientos">
            <h1 className='title'>CONOCIMIENTOS</h1>
            <div className='Imagenes'>
                <img src="/html.png" alt="HTML" className="animated-image" />
                <img src="/JavaScript.png" alt="JavaScript" className="animated-image" />
                <img src="/css-logo.png" alt="CSS" className="animated-image" />
                <img src="Git.png" alt="Git" className="animated-image" />
                <img src="/GitHub.png" alt="GitHub" className="animated-image" />
            </div>

            <div className='Imagenes'>
                <img src="/Sass-1.png" alt="Sass" className="animated-image" />
                <img src="/React.png" alt="React" className="animated-image" />
                <img src="/Bootstrap.png" alt="Bootstrap" className="animated-image" />
                <img src="/Figma.png" alt="Figma" className="animated-image" />
            </div>
        </div>
    );
}

export default Conocimientos;
