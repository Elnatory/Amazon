import React, { useEffect, useState } from 'react';
import { getProductsData } from '../../firebase/getProducts';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductsData(setProducts, setLoading);
    }, []);

    if (loading) {
        return <h1>Loading Firebase data...</h1>
    }

    return (
        <div className='container'>
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product._id}>
                        <h2>{product.title}</h2>
                        <p>Brand: {product.brand.name}</p>
                        <p>Category: {product.category.name}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.imageCover} alt={product.title} />
                        <p>Description: {product.description}</p>
                    </div>
                ))
            ) : (
                <h1>No products :(</h1>
            )}
        </div>
    );
};

export default Products;
