import React, { useState, useEffect, Fragment } from 'react';
import img from '../img/insumos/logo2@2x.png';
import { closeSession } from '../functionsSendMail/functions';

const Navbar = props => {
    
    const [user, setUser] = useState(null)

    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data !== null) {
            setUser(JSON.parse(data))
        }
    }, [])

    return (
        <div className="nav-top">
            <div className="main-navbar">
                {props.estado ? <a href="/"><img src={img} alt='logo-restaurante' style={{width: "185px"}} /></a> : <div></div> }
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
                            {user 
                                ? (user.usuRol === "Administrador" 
                                    ?   <Fragment>
                                            <a href="/panel/usuarios" id="btnlogin">
                                                <i className="fas fa-user"></i>
                                            </a>
                                            <a href="/panel/usuarios" className="mx-3">{user.usuNombre}</a>
                                            <button type="button" className="btn btn-light" onClick={() => closeSession()}>Cerrar Sesión</button>
                                        </Fragment>  
                                    :   <Fragment>
                                            <a href="/panel/compras" id="btnlogin">
                                                <i className="fas fa-user"></i>
                                            </a>
                                            <a href="/panel/compras" className="mx-3">{user.usuNombre}</a>
                                            <button type="button" className="btn btn-light" onClick={() => closeSession()}>Cerrar Sesión</button>
                                        </Fragment>)
                            :   <a href="/login" id="btnlogin">
                                    <i className="fas fa-user"></i>
                                </a>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;