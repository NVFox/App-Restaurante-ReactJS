import React, { useState, useEffect } from "react";
import Empleados from "./Empleados";
import imgoficial from '../img/insumos/restaurante.jpg';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";
import '../css/nosotros.css';
import '../css/pagmenu.css';

const Nosotros = () => {
    const [comments, setComments] = useState([])
    const [empleados, setEmpleados] = useState([])

    useEffect(() => {
      (async () => {
        const data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/testimonios`);
        const results = await data.json();
        setComments(results)
      })()
    }, [])

    useEffect(() => {
      (async () => {
        const data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/empleados`);
        const results = await data.json();
        setEmpleados(results)
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