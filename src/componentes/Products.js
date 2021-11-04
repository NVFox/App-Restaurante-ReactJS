import React, { useState, useEffect } from "react";

import Product from "./Product";

const Products = props => {

    const [listItems, setListItems] = useState([])
    const [listMenu, setListMenu] = useState([])

    const AddCompra = (item, state, auxItem) => {

        state ? setListItems([...listItems, item]) : setListItems(listItems.map(i => (i.proId === item.proId ? {...i, proCantidad: auxItem.proCantidad, proPrecio: auxItem.proPrecio} : i)));

    }

    useEffect(() => {
        let data = localStorage.getItem('items');
        if (data !== null) {
            setListItems(JSON.parse(data));
        }
        ( async () => {
            const data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/productos`);
            const results = await data.json();
            setListMenu(results)
        })()
    }, [])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(listItems))
    }, [listItems])

    return (
        <div>
            <div className="contenido_menu" id="contenido-menu">
                {listMenu.length > 0 && (listMenu.map(i => <Product key={i.proId} products={i} callback={AddCompra} />))}
            </div>
        </div>
    );
}

export default Products;
