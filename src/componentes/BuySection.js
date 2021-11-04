import React, { useState, useEffect } from 'react';

import '../css/carrito.css';

import ItemCompra from './ItemCompra';

const BuySection = () => {
     
    const [lstorage, setLstorage] = useState([]);

    const data = JSON.parse(localStorage.getItem('items'));
    
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

    useEffect(() => {
        let data = localStorage.getItem('items');
        if (data !== null) {
            setLstorage(JSON.parse(data));
        }
    }, [])
    
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
                    <p id="precio-total">{data.length > 0 ? (`$${data.map(item => item.proPrecio).reduce((a, b) => a + b)}`) : (0)}</p>
                </div>
                <a href="/formcompra">PAGAR AHORA</a>
            </div>
        </div>
    )
}

export default BuySection;