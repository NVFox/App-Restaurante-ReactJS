import React from 'react'

const Service = props => {
    return (
        <div class="services-container">
            <div className="serv-img">
                <img src={props.item.serImagen} />
            </div>
            <div className="serv-desc">
                <h2>{props.item.serTitulo}</h2>
                <p>{props.item.serDescripcion}</p>
                <a href="/contactanos">¿PREGUNTAS? CONTÁCTANOS</a>
            </div>
        </div>
    )
}

export default Service
