import {useContext, createContext, useState} from 'react' 
 //Usar el contexto //Crear contexto 
  
 const CarritoContext = createContext() //Creando el contexto 
  
 export const useCarritoContext = () => useContext(CarritoContext) //Utilizar el contexto 
  
 export const CarritoProvider = (props) => { 
 const [Carrito, setCarrito] = useState([]) 
  
  const isInCart = (id) => { 
  return Carrito.find(producto => producto.id === id)//El objeto si existe, undefined si no 
  } 
  
  const addProduct = (producto, cantidad) => { 
    if(isInCart(producto.id)){ //Existe el producto 
  const indice = Carrito.findIndex(prod => prod.id === producto.id ) 
   const aux = [...Carrito] //Array auxiliar 
 aux[indice].cant = cantidad //Asigno nueva cantidad 
 setCarrito(aux) 
 }else { //No existe el producto 
 const nuevoProducto = { 
 ...producto, 
 cant: cantidad } 
 setCarrito([...Carrito,nuevoProducto]) } 
} 
  
const emptyCart = () =>{ 
 setCarrito([]) //Elimino todos los productos del carrito 
 } 
  
 const removeItem = (id) => { 
 setCarrito(Carrito.filter(producto => producto.id = id)) 
 } 
  
 const getItemQuantity = () => { 
 
 return Carrito.reduce((acum,prod) => acum += prod.cant, 0) 
 } 
  
 const totalPrice = () => { 
 return Carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio),0) 
 } 
 console.log(Carrito) 
 return( 
 <CarritoContext.Provider value={{Carrito, isInCart, addProduct, emptyCart,removeItem,getItemQuantity, totalPrice}}> 
 {props.children} 
 </CarritoContext.Provider> 
) 
 }
 