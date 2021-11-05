import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PaginaInicio from './componentes/PaginaInicio';
import PaginaCarrito from './componentes/PaginaCarrito';
import PaginaMenu from './componentes/PaginaMenu';
import { ControlPanel } from './componentes/ControlPanel';
import mapa from './componentes/Mapa';

class App extends Component {

  render() {
    return (
        <Router>
            <Route exact path="/" component={PaginaInicio} />
            <Route path="/carrito" component={PaginaCarrito} />
            <Route path="/menu" render={() => (
              <PaginaMenu articles={this.state.articles} />
            )} />
            <Route path="/panel/:type" render={ControlPanel} />
            <Route path="/mapa" render={mapa} />
        </Router>
    )
  }
}

export default App;