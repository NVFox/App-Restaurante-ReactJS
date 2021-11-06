import React from "react";
import imgoficial from '../img/insumos/restaurante.jpg';
import img from '../img/insumos/personal1@2x.png';
import img1 from '../img/insumos/personal2@2x.png';
import img2 from '../img/insumos/personal3@2x.png';
import test1 from '../img/insumos/testimonio1@2x.png';
import Footer from "./Header";
import Navbar from "./Navbar";
import '../css/nosotros.css';
import '../css/pagmenu.css';

const Nosotros = () => {
    return (
        <div className="m-0 row AppN menu">
        <header>
            <Navbar estado={true} />
        </header>
            <section className="main-content">
                <div className="eee">
                    <img id="restaurante" src={imgoficial} alt="" />
                </div>
                <div className="description">
                    <h2 className="sustitulo">Nuestra Historia</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia provident officiis maiores tenetur
                        repellendus in asperiores expedita harum unde porro, minus voluptatum officia quidem ut facilis est
                        repellat maxime quaerat iste, iusto blanditiis. Itaque, magnam? Tempora voluptatibus id ab perferendis
                        nam autem eius, assumenda non ipsa voluptatum, hic, repudiandae ducimus placeat quisquam voluptate
                        impedit repellendus provident eaque libero nesciunt. Omnis quia quos tenetur nostrum distinctio.
                        Voluptatem esse nisi asperiores itaque voluptate sed numquam facere maxime eaque ducimus obcaecati
                        praesentium neque, atque facilis doloribus soluta iure natus suscipit delectus accusamus provident.
                        Laboriosam at placeat, facere aliquam laborum nesciunt consequatur sunt.</p>
                </div>
            </section>

            <section className="team">
                <div className="columna1">
                    <div className="imgteam">
                        <img src={img} alt="" />
                        <p className="cargo">Gerente</p>
                        <p className="nombre">Grupo 7 </p>
                    </div>

                    <div className="imgteam">
                        <img src={img1} alt="" />
                        <p className="cargo">Asistente T</p>
                        <p className="nombre">Mariana G</p>
                    </div>

                    <div className="imgteam">
                        <img src={img2} alt="" />
                        <p className="cargo">Asistente 2</p>
                        <p className="nombre">Vane P</p>
                    </div>
                </div>

                <div className="columna1">
                    <div className="imgteam">
                        <img src={img2} alt="" />
                        <p className="cargo">Master</p>
                        <p className="nombre">Maria Y </p>
                    </div>

                    <div className="imgteam">
                        <img src={img} alt="" />
                        <p className="cargo">Admin</p>
                        <p className="nombre">Grupo 7</p>
                    </div>

                    <div className="imgteam">
                        <img src={img1} alt="" />
                        <p className="cargo">Coordinadora</p>
                        <p className="nombre">Fernanda G</p>
                    </div>
                </div>
            </section>

            <section className="comments">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="comment-cnt">
                                <div class="comment-img">
                                    <div class="prf-pic">
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                                <div class="comment-txt">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit repudiandae sed,
                                        corrupti autem deleniti laborum harum dolor, atque voluptas,
                                        suscipit earum quae velit iste perferendis provident et laboriosam rem sunt beatae
                                        architecto accusantium doloribus! Veritatis autem dolorem,
                                        suscipit commodi debitis labore sed sequi ab minus placeat omnis facere similique
                                        explicabo praesentium culpa in impedit.</p>
                                    <p>Cliente 1</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="comment-cnt">
                                <div class="comment-img">
                                    <div class="prf-pic">
                                        <img src={test1} alt="" />
                                    </div>
                                </div>
                                <div class="comment-txt">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit repudiandae sed,
                                        corrupti autem deleniti laborum harum dolor, atque voluptas, suscipit earum quae velit
                                        iste perferendis provident et laboriosam rem sunt beatae architecto accusantium
                                        doloribus! Veritatis autem dolorem, suscipit commodi debitis labore sed sequi ab minus
                                        placeat omnis facere similique explicabo praesentium culpa in impedit.</p>
                                    <p>Cliente 2</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="comment-cnt">
                                <div class="comment-img">
                                    <div class="prf-pic">
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                                <div class="comment-txt">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit repudiandae sed,
                                        corrupti autem deleniti laborum harum dolor, atque voluptas, suscipit earum quae velit
                                        iste perferendis provident et laboriosam rem sunt beatae architecto accusantium
                                        doloribus! Veritatis autem dolorem, suscipit commodi debitis labore sed sequi ab minus
                                        placeat omnis facere similique explicabo praesentium culpa in impedit.</p>
                                    <p>Cliente 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
            <Footer />
        </div>
    );

}
export default Nosotros;