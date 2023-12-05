import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './userDash.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { faCalendarDays, faEnvelope, faHouse, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { authContext } from '../../Contexts/isAuth';
import cartImage from '../../assets/new.png';

import { userData } from '../../firebase/getUser';

const DashboardHeader = ({ userName }) => {

	const {isLogin,}=useContext(authContext)
	const name= localStorage.getItem('displayName')
	const id= localStorage.getItem('uid')
	const email= localStorage.getItem('email')
	const creatAt= localStorage.getItem('creatAt')
return (
	<>
	<Header />
	{isLogin ? (
		// Display user details if logged in and user exists
		<div className="category">
		<div style={{ marginLeft: "25%", marginTop: "5%" }}>
			<a href="/account">
			<strong>Account</strong>
			</a>{" "}
			{">"}{" "}
			<a href="#">
			<strong>login & Security</strong>
			</a>
			<h1>
			<strong>Login & Security</strong>
			</h1>
		</div>
		<table id="tableDesi">
		<tbody>
			<tr className="trlogin">
			<td>
				<pre>
				<h3>
					<strong>ID:</strong>
				</h3>
				{id}
				</pre>
				<hr />
			</td>
			<td className="tdStyling ">
				{/* <button className="butts">Add</button> */}
			</td>
			</tr>

			<tr className="trlogin">
			<td>
				<pre>
				<h3>
					<strong>Name:</strong>
				</h3>
				{name}
				</pre>
				<hr />
			</td>
			<td className="tdStyling ">
				{/* <button className="butts">Add</button> */}
			</td>
			</tr>

			<tr className="trlogin">
			<td>
				<pre>
				<h3>
					<strong>Email:</strong>
				</h3>
				{email}
				</pre>
				<hr />
			</td>
			<td className="tdStyling">
				<button className="butts">Add</button>
			</td>
			</tr>

			<tr className="trlogin">
			<td>
				<pre>
				<h3>
					<strong>Password:</strong>
				</h3>
				**********
				</pre>
				<hr />
			</td>
			<td className="tdStyling">
				<button className="butts">Edit</button>
			</td>
			</tr>

			<tr className="trlogin">
			<td>
				<pre>
				<h3>
					<strong>Primary mobile number:</strong>
				</h3>
				+201123481706
				</pre>
				<hr />
			</td>

			<td className="tdStyling">
				<button className="butts  ">Edit</button>
			</td>
			</tr>
			<tr className="trlogin">
			<td>
				<pre>
				<h3>
					<strong>creation Date</strong>
				</h3>
				{creatAt}
				</pre>
			</td>
			<td className="tdStyling">
				{/* <button className="butts">Edit</button> */}
			</td>
			</tr>
			</tbody>
		</table>
		<button  className='butts' style={{  marginLeft: "65%",marginTop:'5px'
}}>Done</button>
		</div>
	) : (
		<Link to="/signin"></Link>
	)}
	<Footer />
	</>
);
};

export default DashboardHeader;