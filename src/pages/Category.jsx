import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4">
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div key={category._id}
                            className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent 
                        shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
                        >
                            <h2>{category.name}</h2>
                            <p>Created At: {category.createdAt}</p>
                            <img className="w-52 h-64 object-contain" src={category.image} alt={category.name} />
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
