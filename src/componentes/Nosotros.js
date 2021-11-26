import React, { useState, useEffect } from "react";
import Empleados from "./Empleados";
import imgoficial from '../img/insumos/restaurante.jpg';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";
import '../css/nosotros.css';
import '../css/pagmenu.css';

const Nosotros = () => {

    const [restaurantes, setRestaurantes] = useState([])
    const [comments, setComments] = useState([])
    const [empleados, setEmpleados] = useState([])

    useEffect(() => {
      (async () => {
        const data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/testimonios`);
        const results = await data.json();
        setComments(results)
      })()
      .then(item => {
        (async () => {
          const data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/empleados`);
          const results = await data.json();
          setEmpleados(results)
        })()
      })
      .then(item => {
        (async () => {
          const data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/establecimiento`);
          const results = await data.json();
          setRestaurantes(results)
        })()
      })
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
                    {restaurantes.length > 0 
                    ? <div>
                        <h2 className="sustitulo">{restaurantes[0].estNombre}</h2>
                        <p>{restaurantes[0].estDescripcion}</p>
                      </div>
                    : <div/>}
                </div>
            </section>

            <section className="team">
                 <div className="columna1">
                    {empleados.length > 0 && empleados.map(item => <Empleados key={item.empId} item={item} />)}
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