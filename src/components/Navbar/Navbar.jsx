/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import BotonCarrito from './BotonCarrito/BotonCarrito';

const Navbar = () => {
    return (
        <nav className="  navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link className="navbar-brand" to={"/"}>Almacen de Barrio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">     
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"../Contacto/Contacto"}>Contacto</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" element="#" role="button" aria-haspopup="true" aria-expanded="false">Productos por Categoria</Link>
          <div className="dropdown-menu">
          <ul>
           <li> <Link className="dropdown-item" to={"/categoria/7"}>Aceites</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/6"}>Arroz Legumbres</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/1"}>Bebidas</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/5"}>Churrascos Lomitos</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/3"}>Leches</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/2"}>Margarinas, Mantequillas</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/9"}>Pastas</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/"}>Verduras Congeladas</Link></li>
           <li>  <Link className="dropdown-item" to={"/categoria/4"}>Yogurt</Link></li>
          </ul>
            

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
