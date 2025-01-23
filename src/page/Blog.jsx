import React from 'react'
import nosotros from '../img/nosotros.jpg'

export const Blog = () => {
  return (
    <main className="contenido-principal contenedor">
    <h2 className="text-center">Nuestro Blog</h2>

    <section className="contenedor-blog">
      <div className="blog">
        <article className="entrada">

          <h2>Guia de Colores</h2>
          <div className="imagen">
            <img src={nosotros} alt="imagen blog"/>
          </div>

          <div className="contenido-blog">
            <div className="entrada-meta">
              <p>Fecha: <span>22 de Octubre de 2022</span></p>
              <p>Escrito por: <span>Un fan de los gatos</span></p>
            </div>
            <div className="entrada-blog">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis esse ab, pariatur, eligendi non
                maxime sunt itaque animi eos temporibus distinctio consequuntur nostrum. Quia autem quibusdam eum maxime
                necessitatibus.</p>
  
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia totam laudantium unde expedita.
                Neque impedit eius corporis mollitia totam illum assumenda, obcaecati modi magni autem excepturi quisquam
                repudiandae iure.</p>
            </div>
            <a href="entrada.html" className="btn max-width-30">Leer</a>
          </div>

        </article>

        <article className="entrada">

          <h2>Guia de Colores</h2>
          <div className="imagen">
            <img src={nosotros} alt="imagen blog"/>
          </div>

          <div className="contenido-blog">
            <div className="entrada-meta">
              <p>Fecha: <span>22 de Octubre de 2022</span></p>
              <p>Escrito por: <span>Un fan de los Gatos</span></p>
            </div>
            <div className="entrada-blog">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis esse ab, pariatur, eligendi non
                maxime sunt itaque animi eos temporibus distinctio consequuntur nostrum. Quia autem quibusdam eum maxime
                necessitatibus.</p>
  
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia totam laudantium unde expedita.
                Neque impedit eius corporis mollitia totam illum assumenda, obcaecati modi magni autem excepturi quisquam
                repudiandae iure.</p>
            </div>
            <a href="entrada.html" className="btn max-width-30">Leer</a>
          </div>

        </article>
      </div>

      <aside>
        <h3>Otras entradas de Blog</h3>
        <ul>
          <li><a href="entrada.html">Guia de Colores</a></li>
          <li><a href="entrada.html">Nuevos Modelos de michis 2025</a></li>
        </ul>
      </aside>
    </section>
  </main>
  )
}
