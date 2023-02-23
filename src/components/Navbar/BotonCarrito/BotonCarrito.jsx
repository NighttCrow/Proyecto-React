import {useCarritoContext} from "../../../Context/CarritoContext"
import { Link } from "react-router-dom";
const BotonCarrito = () => { 
  const { getItemQuantity } = useCarritoContext()
  return( 
      <div>
         <button className='btn btn-dark'>
            <Link to={"/carrito"} className="nav/link" >Carrito </Link>
 
         </button> 
         <span className='btn btn-light'>{getItemQuantity()}</span>
      </div>
 
   ); 
} 

export default BotonCarrito 