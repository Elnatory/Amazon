import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from "react-icons/fa6";

const RatingsAverage = ({ ratingsAverage }) => {
    // console.log(ratingsAverage);
    switch (true) {
        case ratingsAverage === 0:
            return (
                <div className='flex items-center mb-2'>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                </div>
            );
        case ratingsAverage >= 1 && ratingsAverage <= 4:
            return (
                <div className='flex items-center mb-2'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    {ratingsAverage%1!=0?<FaRegStarHalfStroke className='text-yellow-500'/>:<CiStar />}
                    <CiStar />
                    <CiStar />
                </div>
            );
        case ratingsAverage >= 5 && ratingsAverage <= 7:
            return (
                <div className='flex items-center mb-2'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    {ratingsAverage%1!=0?<FaRegStarHalfStroke className='text-yellow-500'/>:<CiStar />}
                    <CiStar />
                </div>
            );
        case ratingsAverage >= 8 && ratingsAverage <= 10:
            return (
                <div className='flex items-center mb-2'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    {ratingsAverage%1!=0?<FaRegStarHalfStroke className='text-yellow-500'/>:<FaStar/>}
                </div>
            );
        default:
            return (
                <div className='flex items-center mb-2'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                </div>
            );
    }
};

export default RatingsAverage;
