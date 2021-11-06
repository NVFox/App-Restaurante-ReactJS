import React, { useState, useEffect } from 'react';
import '../css/pagmenu.css';
import '../css/servicios.css';

import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

const PaginaServicios = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
      (async () => {
        const data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/servicios`);
        const results = await data.json();
        setServices(results)
      })()
    }, [])

    return (
        <div className="servicios menu">
            <header>
                <Navbar estado={true} />
            </header>
            <section className="services">
                <div className="services-title">
                    <h1>Menú</h1>
                </div>
                <div className="services-desc">
                    <div class="serv-txt">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni culpa quis qui optio rerum beatae est
                            tempore? Consequatur nam odit, soluta, atque repudiandae obcaecati veniam ipsum, non natus ad fugit.
                        </p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorum animi. Excepturi porro
                            officia reprehenderit totam corrupti esse omnis natus.</p>
                    </div>
                    <div class="serv-txt">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni culpa quis qui optio rerum beatae est
                            tempore? Consequatur nam odit, soluta, atque repudiandae obcaecati veniam ipsum, non natus ad fugit.
                        </p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorum animi. Excepturi porro
                            officia reprehenderit totam corrupti esse omnis natus.</p>
                    </div>
                </div>
                <div className="services-pics">
                    {services.length > 0 && services.map(item => <Service item={item} />)}
                </div>
                <div className="flechas">
                    <div className="anterior">
                        <a href="/nosotros"><i className="fas fa-arrow-left"></i></a>
                        <a href="/nosotros"> Anterior</a>
                    </div>
                    <div className="siguiente">
                        <a href="/nosotros">Siguiente  </a>
                        <a href="/servicios"><i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )

}

export default PaginaServicios;