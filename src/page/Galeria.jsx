import React from "react";
import { Link } from "react-router-dom";
import galeria_01 from "../img/galeria_01.jpg";
import galeria_02 from "../img/galeria_02.jpg";
import galeria_03 from "../img/galeria_03.jpg";
import galeria_04 from "../img/galeria_04.jpg";
import galeria_05 from "../img/galeria_05.jpg";
import galeria_06 from "../img/galeria_06.jpg";
import galeria_07 from "../img/galeria_07.jpg";
import galeria_08 from "../img/galeria_08.jpg";
import galeria_09 from "../img/galeria_09.jpg";

const images = [
  { src: galeria_01, id: 1 },
  { src: galeria_02, id: 2 },
  { src: galeria_03, id: 3 },
  { src: galeria_04, id: 4 },
  { src: galeria_05, id: 5 },
  { src: galeria_06, id: 6 },
  { src: galeria_07, id: 7 },
  { src: galeria_08, id: 8 },
  { src: galeria_09, id: 9 },
];

export const Galeria = () => {
  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Galería</h2>

      <ul className="galeria">
        {images.map((image) => (
          <li key={image.id}>
            {/* Redirige a /detalle/:id */}
            <Link to={`/detalle/${image.id}`}>
              <img src={image.src} alt={`Imagen ${image.id}`} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
