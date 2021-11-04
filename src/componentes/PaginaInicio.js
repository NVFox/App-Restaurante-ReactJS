import React, { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import MenuSection from './MenuSection';
import EventsSection from './EventsSection';
import Slider from './Slider';

const PaginaInicio = () => {
  
    const [comments, setComments] = useState([])

    useEffect(() => {
      (async () => {
        const data = await fetch(`https://app-restaurante-colnodo.herokuapp.com/testimonios`);
        const results = await data.json();
        setComments(results)
      })()
    }, [])

    return (
        <div className="inicio">
          <Header />
          <section className="main-content">
              <div className="description">
                  <h2>Nuestra Propuesta</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia provident officiis maiores tenetur repellendus in asperiores expedita harum unde porro, minus voluptatum officia quidem ut facilis est repellat maxime quaerat iste, iusto blanditiis. Itaque, magnam? Tempora voluptatibus id ab perferendis nam autem eius, assumenda non ipsa voluptatum, hic, repudiandae ducimus placeat quisquam voluptate impedit repellendus provident eaque libero nesciunt. Omnis quia quos tenetur nostrum distinctio. Voluptatem esse nisi asperiores itaque voluptate sed numquam facere maxime eaque ducimus obcaecati praesentium neque, atque facilis doloribus soluta iure natus suscipit delectus accusamus provident. Laboriosam at placeat, facere aliquam laborum nesciunt consequatur sunt.</p>
              </div>
          </section>
          <MenuSection />
          <EventsSection />
          {comments.length > 0 && 
              <section className="comments">
                  <Slider estado={false} comentarios={comments} />
              </section>}
          <Footer />
        </div>
    )
}

export default PaginaInicio;