import React, { useState } from 'react';
import { amazon } from '../../assets/index';
import { Link, useNavigate } from 'react-router-dom';


const PaymentForm = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [cardInfo, setCardInfo] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [postCode, setPostCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        localStorage.setItem('email', email)
        localStorage.setItem('address', address);
        localStorage.setItem('city', city);
        localStorage.setItem('postCode', postCode)
        localStorage.setItem('phone', phone);
        localStorage.setItem('cardInfo', cardInfo)
        navigate('/checkout');
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
            <div style={{ height: "84vh" }} className=" flex justify-center items-center">
                <form className="max-w-xl p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
                    <p className="text-gray-800 font-medium mb-3 text-center text-lg">Please Fill these required inforamtion</p>
                    <p className="text-gray-800 font-medium">Customer information</p>
                    <div className="">
                        <label className="block text-sm text-gray-600" htmlFor="cus_name">Name</label>
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
                    </div>
                    <div className="">
                        <label className="block text-sm text-gray-600" htmlFor="cus_phone">Phone number</label>
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_phone" name="cus_phone" type="text" required="" placeholder="Your phone number" aria-label="phone number" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="email" required="" placeholder="Your Email" aria-label="Email" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_address">Address</label>
                        <input
                            onChange={e => setAddress(e.target.value)} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_address" name="cus_address" type="text" required="" placeholder="Street" aria-label="Address" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_city">City</label>
                        <input
                            onChange={e => setCity(e.target.value)}
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_city" name="cus_city" type="text" required="" placeholder="City" aria-label="City" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_zip">PostCode</label>
                        <input
                            onChange={e => setPostCode(e.target.value)}
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_zip" name="cus_zip" type="text" required="" placeholder="postCode" aria-label="Zip" />
                    </div>
                    <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                    <div className="">
                        <label className="block text-sm text-gray-600" htmlFor="card_details">Card</label>
                        <input
                            onChange={e => setCardInfo(e.target.value)}
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="card_details" name="card_details" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Card Details" />
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