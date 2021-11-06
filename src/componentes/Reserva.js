import React, { useState, useEffect, Fragment } from "react";
import '../css/contacres.css';


const Reserva = () => {

    const [user, setUser] = useState(null);
    const [reserva, setReserva] = useState({});
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data !== null) {
            setUser(JSON.parse(data))
        }
        (async() => {
            const services = await fetch(`https://app-restaurante-colnodo.herokuapp.com/servicios`);
            const response = await services.json();
            setServicios(response)
        })()
    }, [])

    const handleChange = (e) => {
        setReserva({...reserva, [e.target.name]: e.target.value})
    }

    const addReserva = async (e) => {
        e.preventDefault();

        setReserva({...reserva,
            resCorreo: user.usuCorreo,
            resTelefono: user.usuTelefono, 
            usuId: user.usuId,
        })
        
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(reserva)
        }

        const peticion = await fetch(`https://app-restaurante-colnodo.herokuapp.com/reservas`, requestInit);
        const response = await peticion.json();
        console.log(response)
    }

    return(
        <Fragment>
            {user
                ?   <div className="AppC">
                        <section id="der">
                        <form>
                            <h1>Reserva Ya</h1>
            
                            <div className="form-group">
                                <input type="text" class="form-control" id="name" name="resNom" placeholder="Nombre Completo" onChange={e => handleChange(e)} required/>
                            </div>
                            
                            <div className="btn-group">
                                <select className="form-select" id="selectres" name="resServicio" onChange={e => handleChange(e)} required>
                                    <option selected value="">Seleccione el servicio</option>
                                    {servicios.map(item => <option value={item.serId}>{item.serTitulo}</option>)}
                                </select>
                            </div>
                            <div>
                                <input type="number" className="form-control" id="numpers"  name="resPersonas" placeholder="Número de Personas" min="1" max="15" onChange={e => handleChange(e)} required/>
                            </div>
                            <div class="form-group">
                               <input type="date" className="form-control" id="fecha" name="resFecha" onChange={e => handleChange(e)} required/>
                            </div>
            
                            <div class="form-group">
                                <textarea className="form-control" rows="5" id="indicapers" name="resIndicadores" placeholder="Indicaciones especiales" onChange={e => handleChange(e)} required></textarea>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="check" id="check" required/>
                                <label className="form-check-label" for="check">Acepto Términos y condiciones</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Reservar</button>
                        </form>
                        </section>
                    </div> : window.location.href = 'https://app-restaurante-reactjs.herokuapp.com/login' }
        </Fragment>
    );

}
export default Reserva;