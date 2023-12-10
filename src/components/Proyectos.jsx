import React from 'react';
import ProyectoCard from './ProyectoCard';
import '../App.css';

function Proyectos() {
  const proyectos = [
    { titulo: 'SONRIE LA PELOTA', descripcion: 'Página estática, donde utilicé: HTML - CSS - BOOTSTRAP - SASS - GIT - GITHUB', imagen: "/Proyecto-1.PNG", url: 'https://sonrielapelota.netlify.app/' },
    { titulo: 'GO FILM', descripcion: 'HTML - CSS - JAVASCRIPT - GIT - GITHUB - API', imagen: '/GoFilm.PNG', url: 'https://gofilm.netlify.app/' },
    { titulo: 'CG INDUMENTARIA', descripcion: 'E-commerce donde utilice diferentes promesas. asincronías, APIs, eventos, context', imagen: '/CgIndumentaria.PNG', url: 'https://cgindumentaria3.netlify.app/' },
  ];

  return (
    <div className='contenedor-1' id="proyectos">
      {proyectos.map((proyecto, index) => (
        <ProyectoCard key={index} {...proyecto} />
      ))}
    </div>
  );
}

export default Proyectos;