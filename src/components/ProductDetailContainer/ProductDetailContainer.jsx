

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
const ProductDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        //fetch('http://localhost:3004/productos')
        //.then(response => response.json())
        axios.get('http://localhost:3004/productos')
            .then (promise => promise.data)
            .then(productos => {
            const product = productos.find(item => item.id === parseInt(id))
            setProducto(product)
        })
    },[]);
    return (
        <div className="card mb-3 container itemDetail">

            <ProductDetail item = {producto} />
        </div>
    );
}

export default ProductDetailContainer;