import React, { Component } from 'react';
import '../css/pagmenu.css';
import '../css/compras.css';

import Products from './Products';
import Navbar from './Navbar';
import Footer from './Footer';

class PaginaMenu extends Component {

  render() {
    return (
        <div className="compras menu">
            <header>
                <Navbar estado={true} />
            </header>
            <section className="services">
                <div className="services-title">
                    <h1>Menú</h1>
                </div>
                <Products />
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
}

export default PaginaMenu;