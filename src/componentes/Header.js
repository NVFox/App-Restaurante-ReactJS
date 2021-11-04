import React, { Component } from 'react';

import Slider from './Slider';
import Navbar from './Navbar';
import '../css/pag-principal.css'

class Header extends Component {
    render() {
        return <header>
            <Navbar estado={false} />
            <Slider estado={true} />
        </header>
    }
}

export default Header;