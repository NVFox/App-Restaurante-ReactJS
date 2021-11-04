import React from 'react';
import img from '../img/insumos/logo@2x.png';

const SliderItem = props => {

    const { comentarios, clase, estado } = props;

    return estado ? (
        <div className={`carousel-item ${clase}`}>
            <div className="main-title">
                <div className="logo">
                    <img src={img} alt=""/>
                </div>
                <div className="subtext">
                    <h1>Sabores que <span>exaltan</span> tus sentidos</h1>
                </div>
            </div>
        </div>
    ) : (
        <div className={`carousel-item ${clase}`}>
            <div className="comment-cnt">
                <div className="comment-img">
                    <div className="prf-pic">
                        <img src={`${comentarios.tesImagen}`} alt="" />
                    </div>
                </div>
                <div className="comment-txt">
                    <p>{comentarios.tesTestimonio}</p>
                    <p>{comentarios.tesNombre}</p>
                </div>
            </div>
        </div>
    )
}

export default SliderItem;