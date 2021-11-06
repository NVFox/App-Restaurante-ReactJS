import React from "react";
import '../css/contacres.css';
import '../css/pagmenu.css';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contactanos = () => {
    return(
        <div className="m-0 row AppC menu">
            <header>
                <Navbar estado={true} />
            </header>
            <section id="der">
            <h1>Contactenos</h1>
            <form className="form">
                <div className="col-md-8">
                    <select className="form-select" id="controlselect" required>
                        <option selected>Seleccione el servicio</option>
                        <option>Celebración de cumpleaños</option>
                        <option>Aniversarios</option>
                        <option>Fiestas infantiles</option>
                        <option>Declaraciones o propuestas</option>
                        <option>Despedidas</option>
                        <option>Cena de amigos</option>
                    </select>
                </div>

                <div className="">
                    <input type="text" className="form-control" id="asunto" placeholder="Asunto" required/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Nombre Completo" required/>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Correo electronico" required/>
                </div>

                <div className="form-group">
                    <textarea className="form-control" rows="5" id="coment" placeholder="Su mensaje" required></textarea>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="check" id="check"/>
                    <label className="form-check-label" for="check">Acepto Términos y condiciones</label>
                </div>
                <div className="btn-group1">
                   <button type="submit" className="btn btn-primary">ENVIAR</button>
                </div>
            </form>
            </section>
            <Footer />
        </div>

    );
}

export default Contactanos;