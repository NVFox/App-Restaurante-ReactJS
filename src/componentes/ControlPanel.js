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
        setData({ ...data, [e.target.name]: e.target.value })
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

        setItemsData(itemsData.map(item => item[`${nameObj}Id`] === data[`${nameObj}Id`] ? { ...item, ...data } : item));

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


        <div class="table-responsive-sm">
            <table className="table">
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
                                    <button type="button" className="btn text-white" style={{background:"#371409"}} onClick={() => handleUpdate(item[`${(type).slice(0, 3)}Id`])}>Actualizar</button>
                                    <button type="button" className="btn text-white" style={{ margin: "auto", display: "block", background:"#D64A21"}} onClick={() => handleDelete(item[`${(type).slice(0, 3)}Id`])} >  Borrar  </button>
                                </td>
                            </tr>
                        </Fragment>
                    ) : <Fragment></Fragment>}
                </tbody>
            </table>
        </div>




    )

    const formData = (key, type) => (


        <div className="col" key={`item${key}`}>
            <label htmlFor={`key${key}`} className="form-label">{key.slice(3)}</label>
            <input name={key} value={data[key]} type={type === 'number' ? 'number' : 'text'} className="form-control" onChange={e => handleChange(e)} id={`key${key}`} required />


        </div>

    )

    return (
        <Fragment>
            {user
                ? (
                    <>
                        <>
                            {user.usuRol === "Administrador"
                                ? <Fragment>
 
                                    <nav className="navbar navbar-light  fixed-top" style={{background:"#E57024"}}>
                                        <div className="container-fluid">
                                            <a className="navbar-brand" href="/"><img src={logo} alt="logo-restaurante" style={{ width: "140px" }} /></a>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{background:"#E57024"}}>
                                                <div className="offcanvas-header">
                                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="logo-restaurante" style={{ width: "140px" }} /></h5>
                                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div className="offcanvas-body">
                                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                        <li className="nav-item">
                                                            <a className="nav-link active text-white" aria-current="page" href="/panel/usuarios">Usuarios</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a id="stl" className="nav-link text-white" href="/panel/empleados">Empleados</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/servicios">Servicios</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/productos">Productos</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/testimonios">Testimonios</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/mensajes">Comentarios</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/contacto">Contacto</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/establecimiento">Restaurante</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/usuarios">{user.usuNombre}</a>
                                                            <button type="button" className="btn text-white" style={{background:"#6F2507"}} onClick={() => closeSession()}>Cerrar Sesión</button>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </nav>

                                </Fragment>
                                : <Fragment>
                                    <nav className="navbar navbar-light fixed-top" style={{background:"#E57024"}}>
                                        <div className="container-fluid">
                                            <a className="navbar-brand" href="/"><img src={logo} alt="logo-restaurante" style={{ width: "140px" }} /></a>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{background:"#E57024"}}>
                                                <div className="offcanvas-header">
                                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="logo-restaurante" style={{ width: "140px" }} /></h5>
                                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div className="offcanvas-body">
                                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                        <li className="nav-item">
                                                            <a className="nav-link active text-white" style={{hover:'#6F2507'}} aria-current="page" href="/panel/compras">Compras</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/reservas">Reservas</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/mensajes">Comentarios</a>
                                                        </li>

                                                        <li className="nav-item">
                                                            <a className="nav-link text-white" href="/panel/comprass">{user.usuNombre}</a>
                                                            <button type="button" className="btn text-white" style={{background:"#6F2507"}} onClick={() => closeSession()}>Cerrar Sesión</button>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </nav>
 
                                </Fragment>
                            }
                        </>

                        <div className="m-4">
                            <h2>{`Plataforma de ${type}`}</h2>
                        </div>


                        <div class="row">
                            <div className="col">
                                {keys ? dataTable() : notFound()}
                            </div>


                            <div className="col">
                                {(Object.keys(data)).length > 0 ?
                                    <form onSubmit={e => handleSubmit(e)}>
                                        {Object.keys(data).map(item => formData(item, typeof data[item]))}
                                        <button type="submit" className="btn text-white" style={{margin: "auto",background:"#D64A21",padding: "5px"}}>Crear</button>
                                    </form>
                                    : <div></div>}
                            </div>

                        </div>
                    </>
                )
                : window.location.href = '/login'}
        </Fragment>
    )
}