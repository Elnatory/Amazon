import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { amazon } from '../../assets/index';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebasse';


const PaymentForm = () => {
    const navigate = useNavigate();
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [cardInfo, setCardInfo] = useState('');
    const [governorate, setGovernorate] = useState('');
    const [postCode, setPostCode] = useState('');
    const [street, setStreet] = useState('');
    const name = localStorage.getItem('displayName');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem('uid');

        try {
            const detailsCollectionRef = collection(db, `users/${userId}/details`);
            const docRef = await addDoc(detailsCollectionRef, {
                city,
                governorate,
                postCode,
                street,
                phone,
                cardInfo,
            });

            console.log('Document written with ID: ', docRef.id);

            navigate('/checkout');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };
    return (
        <>
            <div className='flex'>
                <Link to="/"><img src={amazon} alt="logo" width={300} /></Link>
                <div className='w-screen flex item-center '>
                    <p style={{ left: "34%" }} className='text-2xl relative mt-20'>
                        Amazon checkout form
                    </p>
                </div>
            </div>
            <div style={{ height: "84vh" }} className="flex justify-center items-center">
                <form className="max-w-xl p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
                    <p className="text-gray-800 font-medium mb-3 text-center text-lg">
                        <span className='mr-3 font-bold'> Greetings {name}</span>
                        Please fill in the requiredformation
                    </p>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_city">City</label>
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_city" name="cus_city" type="text" required placeholder="City" aria-label="City" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_governorate">Governorate</label>
                        <input
                            onChange={(e) => setGovernorate(e.target.value)}
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_governorate" name="cus_governorate" type="text" required placeholder="Governorate" aria-label="Governorate" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_postCode">PostCode</label>
                        <input
                            onChange={(e) => setPostCode(e.target.value)}
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_postCode" name="cus_postCode" type="text" required placeholder="PostCode" aria-label="PostCode" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_street">Street</label>
                        <input
                            onChange={(e) => setStreet(e.target.value)}
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_street" name="cus_street" type="text" required placeholder="Street" aria-label="Street" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_phone">Phone number</label>
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_phone" name="cus_phone" type="text" required placeholder="Your phone number" aria-label="phone number" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="card_details">Card</label>
                        <input
                            onChange={(e) => setCardInfo(e.target.value)}
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="card_details" name="card_details" type="text" required placeholder="Card Number MM/YY CVC" aria-label="Card Details" />
                    </div>
                    <div className="mt-4">
                        <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3" type="submit">Buy now</button>
                    </div>
                </form>
            </div>
        </>


    );
}
export default PaymentForm;