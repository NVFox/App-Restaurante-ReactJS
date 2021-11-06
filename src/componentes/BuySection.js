import React, { useState, useEffect } from 'react';
import { messageGen, sendClient, sendManage } from '../functionsSendMail/functions';
import { Alert } from './Alert';

import '../css/carrito.css';

import ItemCompra from './ItemCompra';

const BuySection = () => {
     
    const [lstorage, setLstorage] = useState([]);
    const [user, setUser] = useState(null);
    const [alertData, setAlertData] = useState({})
    const [alertShow, setAlertShow] = useState(false)

    useEffect(() => {
        let data = localStorage.getItem('items');
        const userData = localStorage.getItem('user');
        if (data !== null) {
            setLstorage(JSON.parse(data));
        }
        if (userData !== null) {
            setUser(JSON.parse(userData))
        }
    }, [])

    const data = JSON.parse(localStorage.getItem('items'));
    const total = data.length > 0 ? data.map(item => item.proPrecio).reduce((a, b) => a + b) : 0;

    const addCompra = async () => {
        const msg = messageGen(data)

        const compra = {
            comDescripcion: msg,
            comPrecio: total,
            usuId: user.usuId
        }

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(compra)
        }

        const peticion = await fetch(`https://app-restaurante-colnodo.herokuapp.com/compras`, requestInit);
        const response = await peticion.json();
        console.log(response)

        sendClient(msg, user.usuCorreo, user.usuNombre);
        sendManage(msg);

        data.map(item => localStorage.removeItem(`item${item.proId}`));
        localStorage.removeItem('items');

        setAlertData({
            message: 'Su orden de compra se ha efectuado correctamente',
            type: 'success'
        })
        setAlertShow(true)

        setTimeout(() => {
            setAlertShow(false);
        }, 3000);
    }

    const handleAlert = () => {
        setAlertShow(false);
    }
    
    const DelItem = key => {
        let data = JSON.parse(localStorage.getItem('items'));
        data = data.filter(item => item.ProId !== key);

        setLstorage(data);

        localStorage.setItem('items', JSON.stringify(data));
        localStorage.removeItem(`item${key}`);
    }

    const editCompra = (key, counter) => {
        let data = JSON.parse(localStorage.getItem('items'));
        let modElement = data.find(item => item.proId === key);
        let modData = data.filter(item => item.proId !== key);
        const ogPrice = modElement.proPrecio / modElement.proCantidad;

        modElement.proCantidad = counter;
        modElement.proPrecio = ogPrice * counter;
        data = [modElement, ...modData]

        setLstorage(data);

        localStorage.setItem('items', JSON.stringify(data));
        localStorage.setItem(`item${modElement.proId}`, JSON.stringify(modElement));
    }
    
    const notFound = () => (
        <div className="not-found" id="not-found">
            <h2>Lo sentimos</h2>
            <p>Aún no se ha introducido ningún producto al carrito de compras, ingrese a nuestro menú para hacerlo</p>
        </div> 
    )

    return (
        <div className="buy-section">
            <div className="contenido_menu" id="contenido-menu">
                { lstorage.length === 0 ? notFound() : lstorage.map(item => <ItemCompra key={item.proId} local={item} DelItem={DelItem} Editcompra={editCompra} />)}
            </div>
            <div className="total-section">
                <div className="content">
                    <p>TOTAL</p>
                    <p id="precio-total">{total}</p>
                </div>
                {user ? <button type="button" onClick={() => addCompra()}>PAGAR AHORA</button> : <a href="/login">PAGAR AHORA</a>}
            </div>
            <div id="liveAlertPlaceholder">
                {alertShow ? 
                (<div>
                    <Alert alerts={alertData} reset={handleAlert} />
                </div> ) : 
                (<div></div>) }
            </div>
        </div>
    )
}

export default BuySection;