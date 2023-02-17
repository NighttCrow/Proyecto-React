import { useState } from "react";
const Contador = () => {
    const [cont, setCont] = useState (1)
    const disCont = () => cont > 1 && setCont(cont-1)
    const aumCont = () => cont < 10 && setCont(cont+1)

    
    return (<> <button onClick={() => disCont(cont - 1)} className= "btn btn-dark">-</button>
    <p>{cont}</p>
    <button onClick={() => aumCont(cont + 1)} className="btn btn-dark">+</button></>
   
    ) 
    
    
}
export default Contador;