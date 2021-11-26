import React ,{ Fragment }from "react";
import '../css/contacres.css';
import '../css/pagmenu.css';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Alert } from "./Alert";
import { useState } from 'react';
import { sendClient, sendManage } from "../functionsSendMail/functions";

const Contactanos = () => {
    const [contactanos, setContactanos] = useState({});
    const [alertData, setAlertData] = useState({})
    const [alertShow, setAlertShow] = useState(false)

    const handleChange = (e) => {
        setContactanos({...contactanos, [e.target.name]: e.target.value})
    }

    const handleAlert = () => {
        setAlertShow(false);
    }

    const addContactanos = e => {
        e.preventDefault();

        setAlertData({
            message: 'Su solicitud se ha recibido correctamente',
            type: 'success'
        })
        setAlertShow(true);

        sendClient('Su solicitud se ha subido correctamente', contactanos.conCorreo, contactanos.conNombre);
        sendManage('Su solicitud se ha subido correctamente');

        (async ()=> {
            const requestInit = {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify(contactanos)
            }
    
            const peticion = await fetch(`https://app-restaurante-colnodo.herokuapp.com/contacto`, requestInit);
            console.log(peticion);
        })()

        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

   
    return(
        <Fragment> 
        <div className="m-0 row AppC menu">
            <header>
                <Navbar estado={true} />
            </header>
            <section id="der">
            <h1>Contactenos</h1>
            <form className="form"onSubmit={e => addContactanos(e)}>

                <div className="form-group">
                    <input type="text" className="form-control" id="asunto" name="conAsunto" placeholder="Asunto" onChange={e => handleChange(e)} required/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" id="name" name="conNombre" placeholder="Nombre Completo" onChange={e => handleChange(e)} required/>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" id="email" name="conCorreo" placeholder="Correo electrónico" onChange={e => handleChange(e)} required/>
                </div>

                <div className="form-group">
                    <textarea className="form-control" rows="5" id="coment" name="conMensaje"placeholder="Su mensaje" onChange={e => handleChange(e)} required></textarea>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="check" id="check"/>
                    <label className="form-check-label" htmlFor="check">Acepto Términos y condiciones</label>
                </div>
                <div className="btn-boton">
                   <button type="submit" className="btn btn-primary btncenter">ENVIAR</button>
                </div>
            </form>
            </section>
            <Footer />
            <div id="liveAlertPlaceholder">
                            {alertShow ? 
                            (<div>
                                <Alert alerts={alertData} reset={handleAlert} />
                            </div> ) : 
                            (<div></div>) }
                        </div>
                    </div> 
        </Fragment>
    );
}

export default Contactanos;