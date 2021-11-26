import React from 'react';
import '../css/empleados.css';

const Empleados = props => {
    return (
        <div>
            <div>
                <img className="imgEmpleados" src={props.item.empImagen} />
            </div>
            <div>
                <h2>{props.item.empNombre}</h2>
                <p>{props.item.empCargo}</p>
            </div>
        </div>
    )
}

export default Empleados
