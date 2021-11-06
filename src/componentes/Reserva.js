import React, { useState, useEffect, Fragment } from "react";
import '../css/contacres.css';
import '../css/pagmenu.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Alert } from "./Alert";
import { sendClient, sendManage } from "../functionsSendMail/functions";

const Reserva = () => {

    const [reserva, setReserva] = useState({});
    const [servicios, setServicios] = useState([])
    const [alertData, setAlertData] = useState({})
    const [alertShow, setAlertShow] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        (async() => {
            const services = await fetch(`https://app-restaurante-colnodo.herokuapp.com/servicios`);
            const response = await services.json();
            setServicios(response);
        })();
        
        setReserva({...reserva,
            resCorreo: user.usuCorreo,
            resTelefono: user.usuTelefono, 
            usuId: user.usuId
        });
    }, [])

    const handleChange = (e) => {
        setReserva({...reserva, [e.target.name]: e.target.value})
    }

    const handleAlert = () => {
        setAlertShow(false);
    }

    const addReserva = e => {
        e.preventDefault();

        setAlertData({
            message: 'Su orden de reserva se ha efectuado correctamente',
            type: 'success'
        })
        setAlertShow(true);

        (async ()=> {
            const requestInit = {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify(reserva)
            }
    
            const peticion = await fetch(`https://app-restaurante-colnodo.herokuapp.com/reservas`, requestInit);
            console.log(peticion);
        })()

        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

    return(
        <Fragment>
            {user
                ?   <div className="AppC menu">
                    <header>
                        <Navbar estado={true} />
                    </header>
                        <section id="der">
                        <form onSubmit={e => addReserva(e)} >
                            <h1>Reserva Ya</h1>
            
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="resNombre" placeholder="Nombre Completo" onChange={e => handleChange(e)} required/>
                            </div>
                            
                            <div className="btn-group">
                                <select className="form-select" id="selectres" name="resServicio" onChange={e => handleChange(e)} required>
                                    <option value="">Seleccione el servicio</option>
                                    {servicios.map(item => <option value={item.serTitulo}>{item.serTitulo}</option>)}
                                </select>
                            </div>
                            <div>
                                <input type="number" className="form-control" id="numpers"  name="resPersonas" placeholder="Número de Personas" min="1" max="15" onChange={e => handleChange(e)} required/>
                            </div>
                            <div className="form-group">
                               <input type="date" className="form-control" id="fecha" name="resFecha" onChange={e => handleChange(e)} required/>
                            </div>
            
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="indicapers" name="resIndicadores" placeholder="Indicaciones especiales" onChange={e => handleChange(e)} required></textarea>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="check" id="check" required/>
                                <label className="form-check-label" htmlFor="check">Acepto Términos y condiciones</label>
                            </div>
                            <button type="submit" className="btn btn-primary btncenter">Reservar</button>
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
                    : window.location.href = 'https://app-restaurante-reactjs.herokuapp.com/login' }
        </Fragment>
    );

}
export default Reserva;