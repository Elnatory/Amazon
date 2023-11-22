import React, { useEffect, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const CustomerReview = ({ products, setFilteredResults }) => {
    const [selectedCustomerReview, setSelectedCustomerReview] = useState([]);
    const [filteredResultsState, setFilteredResultsState] = useState([]);

    useEffect(() => {
        const filteredResults = products.filter(product => {
            if (selectedCustomerReview.length === 0) {
                return true; // Include all products if no ratings are selected
            } else {
                return selectedCustomerReview.includes(product.ratingsAverage); // Filter products based on selected ratings
            }
        });

        if (JSON.stringify(filteredResults) !== JSON.stringify(filteredResultsState)) {
            setFilteredResultsState(filteredResults);
            setFilteredResults(filteredResults); // Update parent component's results
        }
    }, [selectedCustomerReview, products]);

    const handleReviewChange = category => {
        // Toggle selected category
        setSelectedCustomerReview(prevSelectedCategories => {
            if (prevSelectedCategories.includes(category)) {
                return prevSelectedCategories.filter(selectedCategory => selectedCategory !== category);
            } else {
                return [...prevSelectedCategories, category];
            }
        });
    };

    return (
        <>
            <div>
                <p className='text-lg font-bold'>Customer Review</p>
                <div className='flex flex-col'>
                    {products.map((product, index) => (
                        <div key={index} className='flex items-center mb-4'>
                            {(() => {
                                switch (product.ratingsAverage) {
                                    case product.ratingsAverage < 2:
                                        return (
                                            <>
                                                <FaStar />
                                                <CiStar />
                                                <CiStar />
                                                <CiStar />
                                                <CiStar /> <span className='hover:text-orange-600'>& up</span>
                                            </>
                                        );
                                    case product.ratingsAverage >= 2 && product.ratingsAverage < 4:
                                        return (
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <CiStar />
                                                <CiStar />
                                                <CiStar /> <span className='hover:text-orange-600'>& up</span>
                                            </>
                                        );
                                    case product.ratingsAverage >= 4 && product.ratingsAverage < 6:
                                        return (
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <CiStar />
                                                <CiStar /> <span className='hover:text-orange-600'>& up</span>
                                            </>
                                        );
                                    case product.ratingsAverage >= 6 && product.ratingsAverage < 8:
                                        return (
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <CiStar /> <span className='hover:text-orange-600'>& up</span>
                                            </>
                                        );
                                    case product.ratingsAverage >= 8 && product.ratingsAverage <= 10:
                                        return (
                                            <>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar /> <span className='hover:text-orange-600'>& up</span>
                                            </>
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CustomerReview;
