import React from 'react';
import { Envelope, Instagram, Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
    return (
        <div id='footer'>
            <hr />
            <h1 className='titulo-4'>Contactame!</h1>

            <div className="centered-content">
                <div className="social-icons">
                    <a href="mailto:Gonzalog.raniti@gmail.com" aria-label="E-mail">
                        <Envelope size={20} color="#ff0000" alt="E-mail" />
                    </a>
                    <a href="https://www.linkedin.com/in/gonzalo-raniti/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} color="#0077b5" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/GonzaloRaniti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} color="#000000" alt="GitHub" />
                    </a>
                </div>
                <div className="footer-text">© 2023 Gonzalo Raniti. Todos los derechos reservados.</div>
            </div>
        </div>
    );
}

export default Footer;
