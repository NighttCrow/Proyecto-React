/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Product = ({prod}) => {
    return (
        
        <div className="card">
          <div className="card-img">
            
        <img src={prod.img} className="card-img-top" alt="..." />
          </div>
        <div className="card-body">
          <h5 className="card-title">{prod.nombre}</h5>
          <p className="card-text descrip">{prod.descripcion}</p>
          <p className="card-text"><span className='bold'>Precio: </span>${prod.precio}</p>
          <p className="card-text"><span className='bold'>Stock:</span> {prod.stock}</p>
          <div className="card-body-buy">
          <a href="#" className="btn btn-primary btn">Comprar</a>
          </div>
        </div>
      </div>
      
        
    );
}

export default Product;
