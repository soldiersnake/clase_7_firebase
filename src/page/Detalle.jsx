import React from "react";
import nosotros from "../img/nosotros.jpg";
import { useParams } from "react-router-dom";

export const Detalle = () => {
  const { id } = useParams();

  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Entrada Blog {id ? id : ""}</h2>

      <article className="entrada contenido-entrada-blog">
        <div className="imagen">
          <img src={nosotros} alt="imagen blog" />
        </div>
        <div className="contenido-blog">
          <div className="entrada-meta">
            <p>
              Fecha: <span>22 de Octubre de 2024</span>
            </p>
            <p>
              Escrito por: <span>Un fan de los Michis</span>
            </p>
          </div>
          <div className="entrada-blog">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              nobis esse ab, pariatur, eligendi non maxime sunt itaque animi eos
              temporibus distinctio consequuntur nostrum. Quia autem quibusdam
              eum maxime necessitatibus.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quia totam laudantium unde expedita. Neque impedit eius
              corporis mollitia totam illum assumenda, obcaecati modi magni
              autem excepturi quisquam repudiandae iure.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              nobis esse ab, pariatur, eligendi non maxime sunt itaque animi eos
              temporibus distinctio consequuntur nostrum. Quia autem quibusdam
              eum maxime necessitatibus.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quia totam laudantium unde expedita. Neque impedit eius
              corporis mollitia totam illum assumenda, obcaecati modi magni
              autem excepturi quisquam repudiandae iure.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};
