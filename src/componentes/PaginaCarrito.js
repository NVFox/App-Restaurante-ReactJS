import React, { Component } from 'react';
import '../css/pagmenu.css';
import '../css/carrito.css';

import BuySection from './BuySection';
import Navbar from './Navbar';
import Footer from './Footer';

class PaginaCarrito extends Component {

  render() {
    return (
        <div className="carrito menu">
            <header>
                <Navbar estado={true} />
            </header>
            <section className="services">
                <div className="services-title">
                    <h1>Carrito de Compras</h1>
                </div>
                <BuySection />
                <div className="flechas">
                    <a href="/menu">CONTINUAR COMPRANDO</a>
                </div>
            </section>
            <Footer />
        </div>
    )
  }
}

export default PaginaCarrito;