import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PaginaInicio from './componentes/PaginaInicio';
import PaginaCarrito from './componentes/PaginaCarrito';
import PaginaMenu from './componentes/PaginaMenu';
import { ControlPanel } from './componentes/ControlPanel';
import Mapa from './componentes/Mapa';
import Contactanos from './componentes/Contactanos';
import Comentario from './componentes/Comentario';
import Reserva from './componentes/Reserva';
import FormLogin from './componentes/FormLogin';
import Nosotros from './componentes/Nosotros';
import PaginaServicios from './componentes/PaginaServicios';

class App extends Component {

  render() {
    return (
        <Router>
            <Route exact path="/" component={PaginaInicio} />
            <Route path="/carrito" component={PaginaCarrito} />
            <Route path="/menu" component={PaginaMenu} />
            <Route path="/panel/:type" component={ControlPanel} />
            <Route path="/mapa" component={Mapa} />
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/contactanos" component={Contactanos} />
            <Route path="/comentarios" component={Comentario} />
            <Route path="/reservas" component={Reserva} />
            <Route path="/login" component={FormLogin} />
            <Route path="/servicios" component={PaginaServicios} />
        </Router>
    )
  }
}

export default App;