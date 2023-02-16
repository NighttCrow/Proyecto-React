/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BotonCarrito from './BotonCarrito/BotonCarrito';

const Navbar = () => {
    return (
        <nav className="  navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Almacen de Barrio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">     
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos por Categoria</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Aceites</a>
            <a className="dropdown-item" href="#">Arroz Legumbres</a>
            <a className="dropdown-item" href="#">Bebidas</a>
            <a className="dropdown-item" href="#">Churrascos Lomitos</a>
            <a className="dropdown-item" href="#">Leches</a>
            <a className="dropdown-item" href="#">Margarinas, Mantequillas</a>
            <a className="dropdown-item" href="#">Pastas</a>
            <a className="dropdown-item" href="#">Verduras Congeladas</a>
            <a className="dropdown-item" href="#">Yogurt</a>
            
            
          </div>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      <BotonCarrito/>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
