import React, { Component } from 'react';
import img1 from '../img/insumos/icono1@2x.png';
import img2 from '../img/insumos/icono2@2x.png';
import img3 from '../img/insumos/icono3@2x.png';
import img4 from '../img/insumos/icono4@2x.png';

class EventsSection extends Component {
    render() {
        return (
            <section className="events">
                <div className="events-content cont">
                    <div className="sct-title">
                        <h2>Organizamos tu evento</h2>
                    </div>
                <div className="main-events">
                    <div className="event-cont">
                        <img src={img1} alt="" />
                        <h2>Fiestas Temáticas</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam saepe error, perferendis voluptatum harum cum consequuntur eos dolorum ipsum rerum enim cupiditate. Nam accusantium, amet modi expedita doloremque nesciunt perferendis dignissimos rem maxime natus officiis quisquam asperiores voluptatum fugit.</p>
                        <a href="/servicios">+</a>
                    </div>
                    <div className="event-cont">
                        <img src={img2} alt="" />
                        <h2>Matrimonios</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam saepe error, perferendis voluptatum harum cum consequuntur eos dolorum ipsum rerum enim cupiditate. Nam accusantium, amet modi expedita doloremque nesciunt perferendis dignissimos rem maxime natus officiis quisquam asperiores voluptatum fugit.</p>
                        <a href="/servicios">+</a>
                    </div>
                    <div className="event-cont cen">
                        <img src={img3} alt="" />
                        <h2>Cenas Empresariales</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam saepe error, perferendis voluptatum harum cum consequuntur eos dolorum ipsum rerum enim cupiditate. Nam accusantium, amet modi expedita doloremque nesciunt perferendis dignissimos rem maxime natus officiis quisquam asperiores voluptatum fugit.</p>
                        <a href="/servicios">+</a>
                    </div>
                    <div className="event-cont cum">
                        <img src={img4} alt="" />
                        <h2>Cumpleaños</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam saepe error, perferendis voluptatum harum cum consequuntur eos dolorum ipsum rerum enim cupiditate. Nam accusantium, amet modi expedita doloremque nesciunt perferendis dignissimos rem maxime natus officiis quisquam asperiores voluptatum fugit.</p>
                        <a href="/servicios">+</a>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default EventsSection;