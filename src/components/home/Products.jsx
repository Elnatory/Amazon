import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Products(props) {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <div>Products</div>
        </>
    )
}
