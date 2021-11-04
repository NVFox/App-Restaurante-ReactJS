import React, { useState } from "react";
import { Alert } from "./Alert";

const Product = props => {

    const [counter, setCounter] = useState(1);
    const [alertData, setAlertData] = useState({});
    const [alertShow, setAlertShow] = useState(false);

    const updateCounter = e => setCounter(e.target.value);

    const plusCounter = () => setCounter(counter + 1);

    const MinusCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const handleAlert = () => {
        setAlertShow(false);
    }

    const AddItem = () => {

        let added = {...props.products};

        if (localStorage.getItem(`item${added.proId}`) === null) {

            added.proCantidad = counter;
            added.proPrecio = props.products.proPrecio * added.proCantidad;

            localStorage.setItem(`item${added.proId}`, JSON.stringify(added));
            props.callback(added, true, '');

            setAlertData({
                message: `Se ha añadido ${added.proTitulo} al carrito (Cantidad: ${added.proCantidad}). Se han agregado ${localStorage.length - 1} artículos al carrito`,
                type: "success"
            })

            setAlertShow(true)

        } else {

            let items = JSON.parse(localStorage.getItem(`item${added.proId}`));

            items.proCantidad += counter;
            items.proPrecio += added.proPrecio * counter;

            localStorage.setItem(`item${added.proId}`, JSON.stringify(items));
            props.callback(added, false, items);

            setAlertData({
                message: `Se ha modificado la cantidad de ${items.proTitulo} en el carrito`,
                type: "success"
            })

            setAlertShow(true)

        }
    }

    return (
        <div className="list-item">
            <div className="img">
                <img src={props.products.proImagen} alt="" />
            </div>
            <div className="content">
                <h2 className="content-title">{props.products.proTitulo}</h2>
                <p className="desc">{props.products.proDescripcion}</p>
                <p className="precio"><strong>{props.products.proPrecio}</strong></p>
            </div>
            <div className="buy-section">
                <h3>CONTENIDO</h3>
                <div className="quantity">
                    <form action="/compras" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-cont">
                            <input 
                                type="button" 
                                value="-" 
                                id={`btnrestar${props.products.proId}`} 
                                className="btnrestar"
                                onClick={() => MinusCounter()} />
                            <input 
                                type="text" 
                                value={counter} 
                                id={`contador${props.products.proId}`} 
                                className="contador" 
                                onChange={() => updateCounter()} />
                            <input 
                                type="button" 
                                value="+" 
                                id={`btnagregar${props.products.proId}`} 
                                className="btnagregar" 
                                onClick={() => plusCounter()} />
                        </div>
                        <button 
                            type="submit"
                            className="carritosubmit"
                            id={`carritosubmit${props.products.proId}`}
                            onClick={AddItem} >
                                <i className="fas fa-shopping-cart"></i>
                            Agregar al carrito
                        </button>
                    </form>
                </div>
            </div>
            <div id="liveAlertPlaceholder">
                {alertShow ? 
                (<div>
                    <Alert alerts={alertData} reset={handleAlert} />
                </div> ) : 
                (<div></div>) }
            </div>
        </div>
    );
}

export default Product;