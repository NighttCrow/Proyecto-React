import React from 'react';
import "./Carrusel.css"
const Carrusel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide carrusel" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./img/01.png" className="d-block w-100" alt="ofertas_1" />
                </div>
                <div className="carousel-item">
                    <img src="./img/02.png" className="d-block w-100" alt="ofertas_2" />
                </div>
                <div className="carousel-item">
                    <img src="./img/03.png" className="d-block w-100" alt="ofertas_3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
           
            
        


       
        
    );
}

export default Carrusel;


