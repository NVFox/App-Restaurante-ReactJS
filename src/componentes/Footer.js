import React, { Component } from 'react';
import logo from '../img/insumos/logo@2x.png';

import '../css/pag-principal.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="foot-logo">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <div className="contact">
                    <div className="foot-menu">
                        <nav>
                            <ul>
                                <li><a href="/maps">MAPA DEL SITIO</a></li>
                                <li><a href="/contactanos">CONTÁCTANOS</a></li>
                                <li><a href="/reservas">RESERVAS</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="info">
                        <p>Restaurante Sal & Salsa Ltda.</p>
                        <p>Calle 19 No. 7-30 Bogotá</p>
                        <p>reservassalysalsa.com</p>
                        <p>313 325 25 321</p>
                        <br/>
                        <p>©Copyright 2021</p>
                    </div>
                </div>
                <div className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.118225933955!2d-74.07275005195164!3d4.605529039053902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a1f30307cf%3A0xf863232d4608bc5b!2zQ2wuIDE5ICM3LTMwLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1631422065741!5m2!1ses!2sco" title="maps" width="400" height="220" style={{border : 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </footer>
        )
    }
}

export default Footer;