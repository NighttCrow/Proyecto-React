import React from 'react';

const Product = ({prod}) => {
    return (
        
        <div className="card" style={{width: '15rem', margin: '10px 20px'}}>
        <img src={prod.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.nombre}</h5>
          <p className="card-text">{prod.descripcion}</p>
          <p className="card-text">Precio: {prod.precio}</p>
          <p className="card-text">Stock: {prod.stock}</p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
      
        
    );
}

export default Product;
