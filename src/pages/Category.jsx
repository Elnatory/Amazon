import React, { useEffect, useState } from 'react';
import { getCategoriesData } from '../firebase/getCategory';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCategoriesData(setCategories, setLoading);
    }, []);

    if (loading) {
        return <h1>Loading Firebase data...</h1>
    }

    return (
        <>
            <div className='container'>
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div key={category._id}>
                            <h2>{category.name}</h2>
                            <p>Created At: {category.createdAt}</p>
                            <img src={category.image} alt={category.name} />
                            <p>Slug: {category.slug}</p>
                            <p>Updated At: {category.updatedAt}</p>
                        </div>
                    ))
                ) : (
                    <h1>No categories :(</h1>
                )}
            </div>
        </>
    );
};

export default Categories;
