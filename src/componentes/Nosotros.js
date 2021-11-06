import React, { useState, useEffect } from "react";
import imgoficial from '../img/insumos/restaurante.jpg';
import img from '../img/insumos/personal1@2x.png';
import img1 from '../img/insumos/personal2@2x.png';
import img2 from '../img/insumos/personal3@2x.png';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";
import '../css/nosotros.css';
import '../css/pagmenu.css';

const Nosotros = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
      (async () => {
        const data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/testimonios`);
        const results = await data.json();
        setComments(results)
      })()
    }, [])

    return (
        <div className="m-0 row AppN menu">
        <header>
            <Navbar estado={true} />
        </header>
            <section className="main-content">
                <div className="eee">
                    <img id="restaurante" src={imgoficial} alt="" />
                </div>
                <div className="descriptionN">
                    <h2 className="sustitulo">Nuestra Historia</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia provident officiis maiores tenetur
                        repellendus in asperiores expedita harum unde porro, minus voluptatum officia quidem ut facilis est
                        repellat maxime quaerat iste, iusto blanditiis. Itaque, magnam? Tempora voluptatibus id ab perferendis
                        nam autem eius, assumenda non ipsa voluptatum, hic, repudiandae ducimus placeat quisquam voluptate
                        impedit repellendus provident eaque libero nesciunt. Omnis quia quos tenetur nostrum distinctio.
                        Voluptatem esse nisi asperiores itaque voluptate sed numquam facere maxime eaque ducimus obcaecati
                        praesentium neque, atque facilis doloribus soluta iure natus suscipit delectus accusamus provident.
                        Laboriosam at placeat, facere aliquam laborum nesciunt consequatur sunt.</p>
                </div>
            </section>

            <section className="team">
                <div className="columna1">
                    <div className="imgteam">
                        <img src={img} alt="" />
                        <p className="cargo">Gerente</p>
                        <p className="nombre">Grupo 7 </p>
                    </div>

                    <div className="imgteam">
                        <img src={img1} alt="" />
                        <p className="cargo">Asistente T</p>
                        <p className="nombre">Mariana G</p>
                    </div>

                    <div className="imgteam">
                        <img src={img2} alt="" />
                        <p className="cargo">Asistente 2</p>
                        <p className="nombre">Vane P</p>
                    </div>
                </div>

                <div className="columna1">
                    <div className="imgteam">
                        <img src={img2} alt="" />
                        <p className="cargo">Master</p>
                        <p className="nombre">Maria Y </p>
                    </div>

                    <div className="imgteam">
                        <img src={img} alt="" />
                        <p className="cargo">Admin</p>
                        <p className="nombre">Grupo 7</p>
                    </div>

                    <div className="imgteam">
                        <img src={img1} alt="" />
                        <p className="cargo">Coordinadora</p>
                        <p className="nombre">Fernanda G</p>
                    </div>
                </div>
            </section>
            {comments.length > 0 && 
              <section className="comments">
                  <Slider estado={false} comentarios={comments} />
              </section>}
            <Footer />
        </div>
    );

}
export default Nosotros;