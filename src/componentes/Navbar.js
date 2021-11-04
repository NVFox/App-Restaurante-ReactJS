import React, { Component } from 'react';
import img from '../img/insumos/logo2@2x.png';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-top">
                <div className="main-navbar">
                    {this.props.estado ? <a href="/"><img src={img} alt='logo-restaurante' style={{width: "185px"}} /></a> : <div></div> }
                    <nav>
                        <ul>
                            <li>
                                <a href="/nosotros">NOSOTROS</a>
                            </li>
                            <li>
                                <a href="/menu">MENÚ</a>
                            </li>
                            <li>
                                <a href="/servicios">SERVICIOS</a>
                            </li>
                            <li>
                                <a href="/contactanos">CONTÁCTANOS</a>
                            </li>
                            <li>
                                <a href="/carrito" id="btncompra">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/panel/usuarios" id="btnlogin">
                                    <i className="fas fa-user"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;