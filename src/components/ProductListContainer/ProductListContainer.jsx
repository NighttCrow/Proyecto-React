import { useState, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
const ProductListContainer = () => {
    const [ productos, setProductos] = useState([]);
    useEffect(() => {
        fetch('./json/productos.json')
        .then(promise => promise.json())
        .then(products => {
            const items = ProductList({products})
            setProductos(items)
        })
    }, [])

    return (
        <div className="row cardProducto">
            {productos}

        </div>
    );
}

export default ProductListContainer;
