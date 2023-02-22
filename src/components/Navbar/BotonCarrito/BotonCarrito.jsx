/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {useCarritoContext} from "../../../Context/CarritoContext"
 import { Link } from "react-router-dom";
 const BotonCarrito = () => { 
  
  
 return( 
<div>
 <button className='btn btn-dark'>
    <Link to={"/carrito"} className="nav/link" >Carrito </Link>
 
 </button> 
 <samp>{useCarritoContext()} </samp>
 </div>
 
 ); 
 } 
 export default BotonCarrito 