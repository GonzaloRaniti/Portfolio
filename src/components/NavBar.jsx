import React from 'react';
import '../App.css';

function NavBar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section>
            <h1 className='Titulo'>Portfolio</h1>
            <ul className="Secciones">
                <li className="NavItem" onClick={() => scrollToSection('sobre-mi')}>Sobre Mi</li>
                <li className="NavItem" onClick={() => scrollToSection('conocimientos')}>Conocimientos</li>
                <li className="NavItem" onClick={() => scrollToSection('proyectos')}>Proyectos</li>
            </ul>
        </section>
    );
}


export default NavBar;
