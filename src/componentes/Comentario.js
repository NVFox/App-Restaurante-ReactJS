import React, { useState, useEffect, Fragment } from "react";
import '../css/contacres.css';
import '../css/pagmenu.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Alert } from "./Alert";
import { sendClient, sendManage } from "../functionsSendMail/functions";

const Comentario = () => {

    const [comentario, setComentario] = useState({});
    const [alertData, setAlertData] = useState({})
    const [alertShow, setAlertShow] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        
        setComentario({...comentario,
            usuId: user.usuId
        })
    }, []);

    const handleChange = (e) => {
        setComentario({...comentario, [e.target.name]: e.target.value})
    }

    const handleAlert = () => {
        setAlertShow(false);
    }

    const addReserva = e => {
        e.preventDefault();

        setAlertData({
            message: 'Su comentario se ha subido correctamente',
            type: 'success'
        })
        setAlertShow(true);

        sendClient('Su comentario se ha subido correctamente', user.usuCorreo, user.usuNombre);
        sendManage('Su comentario se ha subido correctamente');

        (async ()=> {
            const requestInit = {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify(comentario)
            }
    
            const peticion = await fetch(`https://app-restaurante-colnodo.herokuapp.com/mensajes`, requestInit);
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
                        <form onSubmit={e => addReserva(e)}>
                            <h1>Comentarios</h1>
                            <div className="form-group">
                                <textarea className="form-control" rows="7" id="comment" name="menComentario" placeholder="Comentario" onChange={e => handleChange(e)} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btncenter">Comentar</button>
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
                    : window.location.href = '/login' 
            }
        </Fragment>
    );
}
export default Comentario;