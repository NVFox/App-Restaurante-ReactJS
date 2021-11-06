import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import PaginaInicio from './componentes/PaginaInicio';
import PaginaCarrito from './componentes/PaginaCarrito';
import PaginaMenu from './componentes/PaginaMenu';
import { ControlPanel } from './componentes/ControlPanel';
import Mapa from './componentes/Mapa';
import Contactanos from './componentes/Contactanos';
import Reserva from './componentes/Reserva';
import FormLogin from './componentes/FormLogin';

class App extends Component {

  render() {
    return (
        <Router>
            <Route exact path="/" component={PaginaInicio} />
            <Route path="/carrito" component={PaginaCarrito} />
            <Route path="/menu" component={PaginaMenu} />
            <Route path="/panel/:type" component={ControlPanel} />
            <Route path="/mapa" component={Mapa} />
            <Route path="/contactanos" component={Contactanos} />
            <Route path="/reservas" component={Reserva} />
            <Route path="/login" component={FormLogin} />
        </Router>
    )
  }
}

export default App;