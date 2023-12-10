import React from 'react';
import '../App.css';

function SobreMi() {
    const descargarCV = () => {
        const url = '/CurriculumGonzaloRaniti.pdf';
        window.open(url, '_blank');
    };

    return (
        <div className="contenedor-sobre-mi" id="sobre-mi">
            <div className="contenido-sobre-mi">
                <div className="imagen-y-boton">
                    <img className='img' width={400} src="/FotoPerfil.png" alt="Foto de perfil" />
                    <button className="miBoton" onClick={descargarCV}>DESCARGAR CV</button>
                </div>
            </div>
            <div className="texto-sobre-mi">
                <p className='Parrafo-1'>Hola</p>
                <h1 className="descripcion">Soy Gonzalo</h1>
                <p className='Parrafo'>Front-End Developer</p>
            </div>
        </div>
    );
}

export default SobreMi;
