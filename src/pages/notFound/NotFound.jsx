import React from 'react';
import { Link } from 'react-router-dom';
import { darkLogo } from '../../assets/index';
import { notFound } from '../../assets/index';

const NotFound = () => {
    return (
        <div className=''>
            <div className="w-full mx-auto flex justify-center bg-white">
                <Link to="/">
                    <img className="w-32" src={darkLogo} alt="darkLogo" />
                </Link>
            </div>
            <div className="w-full mx-auto flex justify-center bg-white">
                <div> <img src={notFound} alt="notFound" className='mt-5 mx-2'/></div>
                <div>
                    <p className='text-orange-600 font-bold'>looking for something?</p>
                    <p>We're sorry. The Web address you entered is not a functioning page on our site</p>
                    
                    <p className='mt-3'> Go to amazon.eg's <Link to="/" className='text-orange-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100 font-semibold '>
                        Home Page</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
