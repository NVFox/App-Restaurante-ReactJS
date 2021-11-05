import React from "react";
import '../css/mapa.css';


const mapa = () => {
    return (
        <div className="AppM">
            <h1>Mapa del sitio</h1>
            <section className="abs-inline">
                <ul className="col-3 list-unstyled">
                    <li className="font-weight-bold text-uppercase text">
                        <h6>GENERAL</h6>
                    </li>
                    <li><a href="inicio" className="text">INICIO</a></li>
                    <li><a href="/" className="text">NUESTRA PROPUESTA </a></li>
                    <li><a href="/" className="text">RECOMENDADO DEL CHEF</a></li>
                    <li><a href="/" className="text">ORGANIZAMOS TU EVENTO</a></li>
                    <li><a href="/" className="text">TESTIMONIOS</a></li>
                </ul>

                <ul className="col-3 list-unstyled">
                    <li><a href="/Nosotros" className="font-weight-bold  text-uppercase text">
                        <h6 className="">NOSOTROS</h6>
                    </a></li>
                    <li><a href="/nosotros" className="text">NUESTRA HISTORIA</a></li>
                    <li><a href="/nosotros" className="text">PLANTILLA DE COLABORADORES</a></li>
                    <li><a href="/nosotros" className="text">TESTIMONIOS</a></li>
                </ul>

                <ul className="col-1 list-unstyled">
                    <li><a href="/menu" className="font-weight-bold  text-uppercase text">
                        <h6>EL MENÚ</h6>
                    </a></li>
                </ul>

               
                <ul className="col-3 list-unstyled">
                    <li><a href="/servicios" className="font-weight-bold  text-uppercase text">
                        <h6>SERVICIOS</h6>
                    </a></li>
                    <li><a href="/servicios" className="text">CELEBRACIÓN DE CUMPLEAÑOS</a></li>
                    <li><a href="/servicios" className="text">ANIVERSARIOS</a></li>
                    <li><a href="/servicios" className="text">FIESTAS INFANTILES</a></li>
                    <li><a href="/servicios" className="text">DECLARACIONES O PROPUESTAS</a></li>
                    <li><a href="/servicios" className="text">DESPEDIDAS</a></li>
                    <li><a href="/servicios" className="text">CENA CON AMIGOS</a></li>
                </ul>

                <ul className="col-2 list-unstyled">
                    <li><a href="/contactanos" className="font-weight-bold  text-uppercase text">
                        <h6 className="">CONTÁCTENOS</h6>
                    </a></li>
                </ul>

            </section>

        </div>

    );


}
export default mapa;