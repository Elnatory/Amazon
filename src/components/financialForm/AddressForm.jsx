import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../header/Header';

const AddressForm = () => {
  const navigate = useNavigate();
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');


  return (
    <>
      <Header/>
      <section style={{height:"88vh"}} className='w-full flex justify-center items-center'>
        <div className='bg-white p-5 mx-auto max-w-md rounded-md shadow-md w-screen'>
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4">Address</h2>
            <div className="mb-4">
              <label htmlFor="streetName" className="block text-sm font-medium text-gray-600">
                Street name
              </label>
              <input
                type="text"
                placeholder='Enter street name'
                value={street}
                id='streetName'
                pattern="[A-Za-z0-9\s]{3,}"
                onChange={(e) => setStreet(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cityName" className="block text-sm font-medium text-gray-600">
                City name
              </label>
              <input
                type="text"
                placeholder="Enter city name"
                value={city}
                id='cityName'
                pattern="[A-Za-z\s]{3,}"
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                id='phoneNumber'
                pattern="^(010|011|012|015)[0-9]{8}$"
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className='flex justify-center'>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Continue to Payment
                </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddressForm;
