import React, { Component } from 'react';
import img from '../img/insumos/menu@2x.png';
import img1 from '../img/insumos/menu1@2x.png';
import img2 from '../img/insumos/menu2@2x.png';
import img3 from '../img/insumos/menu3@2x.png';
import img4 from '../img/insumos/menu4@2x.png';

class MenuSection extends Component {
    render() {
        return (
            <section className="menu">
                <div className="menu-content cont">
                    <div className="sct-title">
                        <h2>Los recomendados del chef</h2>
                    </div>
                    <div className="food">
                        <div className="img">
                            <div className="pics">
                                <img src={img1} alt="" />
                            </div>
                            <div className="pics">
                                <img src={img2} alt="" />
                            </div>
                            <div className="pics">
                                <img src={img3} alt="" />
                            </div>
                            <div className="pics">
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div className="card">
                            <img src={img} alt="" />
                            <a href="/menu">Consultar el menú</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MenuSection;