import React, { useState, useEffect, Fragment } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Alert } from './Alert';

import '../css/form-compra.css'

const FormLogin = () => {

    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState({})
    const [alertData, setAlertData] = useState({})
    const [alertShow, setAlertShow] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem('user');

        if (userData !== null) {
            setUser(JSON.parse(userData))
        }
    }, [])

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const handleAlert = () => {
        setAlertShow(false);
    }

    const handleLogin = e => {
        e.preventDefault();

        (async() => {
            const requestInit = {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify(userData)
            }
            const data = await fetch('https://app-restaurante-colnodo.herokuapp.com/login', requestInit);
            const response = await data.json();

            if (response.message || response.type) {
                setAlertData(response);
                setAlertShow(true);

                setTimeout(() => {
                    setAlertShow(false);
                }, 3000)
            } else {
                setAlertData({
                    message: 'Su sesión ha sido iniciada exitosamente',
                    type: 'success'
                })
                setAlertShow(true);

                localStorage.setItem('user', JSON.stringify(response));

                setTimeout(() => {
                    window.history.back();
                }, 3000);
            }
        })()
    }

    return (
        <Fragment>
            {user 
                ?   <div className="form-login">
                        <header>
                            <Navbar estado={true} />
                        </header>
                        <section className="services">
                            <form class="envio-correo" onSubmit={e => handleLogin(e)} >
                                <fieldset>
                                    <legend>Inicio de Sesión</legend>
                                    <div class="inp">
                                        <p>Inicie sesión para continuar</p>
                                        <input type="text" name="usuNombre" id="nombre" placeholder="Nombre de Usuario" onChange={e => handleChange(e)} />
                                        <input type="password" name="usuContraseña" id="pass" placeholder="Contraseña" onChange={e => handleChange(e)} />
                                    </div>
                                    <button type="submit" id="btnenviar">Entrar</button>
                                </fieldset>
                            </form>
                        </section>
                        <div id="liveAlertPlaceholder">
                            {alertShow 
                                ?   (<div>
                                        <Alert alerts={alertData} reset={handleAlert} />
                                    </div> ) 
                                :   (<div></div>) }
                        </div>
                        <Footer />
                    </div> : window.history.back() }
        </Fragment>
    )
}

export default FormLogin
