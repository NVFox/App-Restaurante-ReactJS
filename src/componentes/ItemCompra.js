import React, { useState } from 'react';

const ItemCompra = props => {

    const [classActive, setClassActive] = useState(false);

    const PlusCounter = () => {
        const sum = props.local.proCantidad + 1;
        props.Editcompra(props.local.proId, sum);
    }

    const MinusCounter = () => {
        let res = props.local.proCantidad;
        if (props.local.proCantidad > 1) {
            res = props.local.proCantidad - 1;
        }
        props.Editcompra(props.local.proId, res);
    }
    
        return (
            <div className="list-item">
                <div className="img">
                    <img src={props.local.proImagen} alt="" />
                </div>
                <div className="content">
                    <div className="control-sect">
                        <h2 className="content-title">{props.local.proTitulo}</h2>
                        <p className="precio"><strong>{props.local.proPrecio}</strong></p>

                        <button 
                            type="button"
                            className={classActive ? "btn1 active" : "btn1"}
                            id={`item${props.local.proId}`} 
                            onClick={() => (props.DelItem(props.local.proId))}>
                                <i className="fas fa-trash"></i>
                        </button>

                        <button 
                            type="button"
                            className={classActive ? "btn2 active" : "btn2"}
                            id={`edit${props.local.proId}`}
                            onClick={() => setClassActive(!classActive)}>
                                <i className="fas fa-edit"></i>
                            </button>
                    </div>
                    <p className="desc">{props.local.proDescripcion}</p>
                    {classActive ? (
                        <form action="/formcompra">
                            <input
                                    type="button" 
                                    value="-" 
                                    id={`btnrestar${props.local.proId}`}
                                    className="btnrestar"
                                    onClick={() => MinusCounter()}
                                />

                            <input
                                type="text" 
                                value={props.local.proCantidad} 
                                id={`contador${props.local.proId}`}
                                className="contador"
                            />
        
                            <input
                                type="button" 
                                value="+" 
                                id={`btnagregar${props.local.proId}`}
                                className="btnagregar"
                                onClick={() => PlusCounter()} 
                            />
                        </form>
                    ) : (
                        <form action="/formcompra">
                            <input
                                type="button" 
                                value="-" 
                                id={`btnrestar${props.local.proId}`}
                                className="btnrestar"
                                onClick={() => MinusCounter()}
                                disabled
                            />

                            <input
                                type="text" 
                                value={props.local.proCantidad} 
                                id={`contador${props.local.proId}`}
                                className="contador"
                                disabled 
                            />
    
                            <input
                                type="button" 
                                value="+" 
                                id={`btnagregar${props.local.proId}`}
                                className="btnagregar"
                                onClick={() => PlusCounter()}
                                disabled 
                            />
                        </form>
                    )}
                </div>
            </div>
        )
}

export default ItemCompra;