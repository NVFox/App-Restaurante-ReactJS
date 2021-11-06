import React, { useState, useEffect, Fragment } from 'react';
import * as sample from '../sample/tables';
import logo from '../img/insumos/logo2@2x.png'
import { useParams } from 'react-router';
import { closeSession } from '../functionsSendMail/functions';

export const ControlPanel = () => {

    const { type } = useParams();

    const [itemsData, setItemsData] = useState([]);
    const [data, setData] = useState(sample[type]);

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        const getItems = async () => {
            if (user !== null) {
                let data;

                if (user.usuRol === "Administrador") {
                    data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/${type}`);
                } else {
                    data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/${type}/${user.usuId}`)
                }

                const results = await data.json();
                setItemsData(results)
            }
        }
        getItems();
    }, [type, user])

    const keys = itemsData[0] ? Object.keys(itemsData[0]) : [];

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleDelete = async (id) => {
        setItemsData(itemsData.filter(item => item[`${(type).slice(0, 3)}Id`] !== id))

        const requestInit = {
            method: 'DELETE'
        }

        const req = await fetch(`https://app-restaurante-colnodo.herokuapp.com/${type}/${id}`, requestInit)
        const request = await req.json();
        console.log(request);
    }

    const handleUpdate = async (id) => {
        const nameObj = (type).slice(0, 3);

        for (const item in data) {
            let number = parseInt(data[item], 10);

            if (data[item] !== "") {
                if (!isNaN(number)) {
                    data[item] = parseInt(data[item]);
                }
            } else {
                alert('Los datos introducidos son incorrectos o están vacios')
                return
            }
        }

        setItemsData(itemsData.map(item => item[`${nameObj}Id`] === data[`${nameObj}Id`] ? {...item, ...data} : item));

        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        const req = await fetch(`https://app-restaurante-colnodo.herokuapp.com/${type}/${id}`, requestInit)
        const request = await req.json();
        console.log(request);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        for (const item in data) {
            let number = parseInt(data[item], 10);

            if (data[item] !== "") {
                if (!isNaN(number)) {
                    data[item] = parseInt(data[item]);
                }
            } else {
                alert('Los datos introducidos son incorrectos o están vacios')
                return
            }
        }

        setItemsData([...itemsData, data]);

        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        const req = await fetch(`https://app-restaurante-colnodo.herokuapp.com/${type}`, requestInit)
        const request = await req.json();
        console.log(request);

        setData(sample[type]);
    }

    const notFound = () => (
        <div>
            <h2>Lo sentimos</h2>
            <p>No se han introducido datos todavia</p>
        </div>
    )

    const dataTable = () => (
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        {keys.map(item => <th key={keys.indexOf(item)}>{item.slice(3)}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {itemsData.length > 0 ? itemsData.map(item =>
                    <Fragment key={`frag${itemsData.indexOf(item)}`}>
                        <tr key={`item${itemsData.indexOf(item)}`}>
                            {Object.values(item).map(i => <td key={`item${Object.values(item).indexOf(i)}`} >{i}</td>)}
                            <td key={`control${itemsData.indexOf(item)}`}>
                                <button type="button" className="btn btn-dark mx-3" onClick={() => handleUpdate(item[`${(type).slice(0, 3)}Id`])}>Actualizar</button>
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(item[`${(type).slice(0, 3)}Id`])} >Borrar</button>
                            </td>
                        </tr>
                    </Fragment>
                    ) : <Fragment></Fragment>}
                </tbody>
            </table>
        </div>
    )

    const formData = (key, type) => (
        <div className="mb-3" key={`item${key}`}>
            <label htmlFor={`key${key}`} className="form-label">{key.slice(3)}</label>
            <input name={key} value={data[key]} type={type === 'number' ? 'number' : 'text'} className="form-control" onChange={e => handleChange(e)} id={`key${key}`} required />
        </div>
    )

    return (
        <Fragment>
            {user 
                ?   (<div>
                        {user.usuRol === "Administrador" 
                        ? (window.location.href !== "https://app-restaurante-reactjs.herokuapp.com/panel/usuarios" && window.location.replace("https://app-restaurante-reactjs.herokuapp.com/panel/usuarios")) 
                        : (window.location.href !== "https://app-restaurante-reactjs.herokuapp.com/panel/compras" && window.location.replace("https://app-restaurante-reactjs.herokuapp.com/panel/compras")) }
                        <div className="d-flex align-items-center bg-dark" style={{height: "70px"}} >
                            <a href="/">
                                <img src={logo} className="mx-4" alt="logo-restaurante" style={{width: "200px"}} />
                            </a>
                            {user.usuRol === "Administrador" 
                                ?   <Fragment>
                                        <a href="/panel/usuarios" className="mx-3 text-white">Usuarios</a>
                                        <a href="/panel/servicios" className="mx-3 text-white">Servicios</a>
                                        <a href="/panel/productos" className="mx-3 text-white">Productos</a>
                                        <a href="/panel/testimonios" className="mx-3 text-white">Testimonios</a>
                                        <div className="justify-self-right">
                                            <a href="/panel/usuarios" className="text-white" id="btnlogin">
                                                <i className="fas fa-user"></i>
                                            </a>
                                            <a href="/panel/usuarios" className="mx-2 text-white" >{user.usuNombre}</a>
                                            <button type="button" className="btn btn-light" onClick={() => closeSession()}>Cerrar Sesión</button>
                                        </div>
                                    </Fragment>
                                :   <Fragment>
                                        <a href="/panel/compras" className="mx-3 text-white">Compras</a>
                                        <a href="/panel/reservas" className="mx-3 text-white">Reservas</a>
                                        <div className="justify-self-end">
                                            <a href="/panel/compras" className="text-white" id="btnlogin">
                                                <i className="fas fa-user"></i>
                                            </a>
                                            <a href="/panel/compras" className="mx-2 text-white">{user.usuNombre}</a>
                                            <button type="button" className="btn btn-light" onClick={() => closeSession()}>Cerrar Sesión</button>
                                        </div>
                                    </Fragment>
                            }
                        </div>
                        <div className="m-4">
                            <h2>{`Plataforma de ${type}`}</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6">
                                {keys ? dataTable() : notFound()}
                            </div>
                            <div className="col-5">
                                {(Object.keys(data)).length > 0 ? 
                                    <form onSubmit={e => handleSubmit(e)}>
                                        {Object.keys(data).map(item => formData(item, typeof data[item]))}
                                        <button type="submit" className="btn btn-primary">Crear</button>
                                    </form>
                                : <div></div> }    
                            </div>
                        </div>
                    </div>) 
                : window.location.href = 'https://app-restaurante-reactjs.herokuapp.com/login'}
        </Fragment>
    )
}
