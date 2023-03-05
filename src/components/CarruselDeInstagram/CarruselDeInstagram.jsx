import React from 'react';

const CarruselDeInstagram = () => {
    return (
        <div className='containerIg'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className='row'>
              <div className='col-3'>
            <img src="./img/yogurth.jpg" className="w-100" alt="yogurth con frutas" />
          </div>
          <div className='col-3'>
            <img src="./img/pastas.jpg" className="w-100" alt="pastas" />
          </div>
          <div className='col-3'>
            <img src="./img/porotos.jpg" className="w-100" alt="porotos" />
          </div>
          <div className='col-3'>
            <img src="./img/manteca.jpg" className="w-100" alt="pan con manteca" />
          </div></div></div>

          <div className="carousel-item ">
            <div className='row'>
              <div className='col-3'>
            <img src="./img/coca-cola.jpg" className="w-100" alt="coca cola" />
          </div>
          <div className='col-3'>
            <img src="./img/corbatas.jpg" className="w-100" alt="corbatas" />
          </div>
          <div className='col-3'>
            <img src="./img/lentejas.jpeg" className="w-100" alt="lentejas" />
          </div>
          <div className='col-3'>
            <img src="./img/leche.jpg" className="w-100" alt="jarra de leche" />
          </div></div></div>

          <div className="carousel-item ">
            <div className='row'>
              <div className='col-3'>
            <img src="./img/canasto.jpg" className="w-100" alt="canasto de compras" />
          </div>
          <div className='col-3'>
            <img src="./img/verduras.jpg" className="w-100" alt="verduras congeladas" />
          </div></div></div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

        </div>
    );
}

export default CarruselDeInstagram;
