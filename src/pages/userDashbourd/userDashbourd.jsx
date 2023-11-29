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
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	const { isLogin } = useContext(authContext);


	useEffect(() => {
		const fetchData = async () => {
		try {
			const data = await userData(setUser,setLoading); // Retrieve all users
			console.log(data);
console.log(data);
			const loggedInUser = data.find((u) => u.uid == localStorage.getItem("userId"));
			setUser(loggedInUser); // Set the logged-in user to state
			// setLoading(false);
		} catch (error) {
			console.error("Error fetching user data:", error);
			// setLoading(false);
		}
		};
	
		if (isLogin) {
		fetchData();
		}
	}, [isLogin])
	console.log(localStorage.getItem("user"));


	//   var table=document.getElementById("tableDesi");
return (
	<>
	<Header />
	{isLogin && user ? (
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
				{user.uid}
				</pre>
				<hr />
			</td>
			<td className="tdStyling ">
				<button className="butts">Add</button>
			</td>
			</tr>

			<tr className="trlogin">
			<td>
				<pre>
				<h3>
					<strong>Name:</strong>
				</h3>
				{user.displayName}
				</pre>
				<hr />
			</td>
			<td className="tdStyling ">
				<button className="butts">Add</button>
			</td>
			</tr>

			<tr className="trlogin">
			<td>
				<pre>
				<h3>
					<strong>Email:</strong>
				</h3>
				{user.email}
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
				+201146223301
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
				{user.createdAt}
				</pre>
			</td>
			<td className="tdStyling">
				<button className="butts">Edit</button>
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