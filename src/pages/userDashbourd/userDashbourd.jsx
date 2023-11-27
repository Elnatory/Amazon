import React from 'react';
import { Link } from 'react-router-dom';
import './userDash.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { faCalendarDays, faEnvelope, faHouse, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { authContext } from '../../Contexts/isAuth';
import cartImage from '../../assets/new.png';


const DashboardHeader = ({ userName }) => {

  // const handleLogout = () => {
  //   // Handle logout logic here
  // };
  const {isLogin,}=useContext(authContext)
  const name= localStorage.getItem('displayName')
  const id= localStorage.getItem('token')
  const email= localStorage.getItem('email')
  const createAt= localStorage.getItem('creatAt')

//   console.log(displayRes.user)

  return (
    <>
   <Header/>


{isLogin?(

<div className='parents'>
<img className="userImg " src={cartImage} alt='user image'style={{width:'200px',marginLeft:"40%"}}/>
<div class="container">
<nav>

	
		<ul className="mcd-menu" style={{marginTop:'20px'}}>


			<li>
				<a href="/">
					<i class="fa fa-home"></i>
					<strong><FontAwesomeIcon style={{color:'white',paddingBottom:'2px'}} icon={faHouse} /> Home</strong>
					{/* <small>sweet home</small> */}
				</a>
			</li>
			<li>
				<a href="#" class="active">
					<i class="fa fa-edit"></i>
					<strong> <FontAwesomeIcon style={{color:'white',paddingBottom:'2px'}}  icon={faUser} />    Account         </strong>
					<small>special offers</small>
					{/* <small>special thing </small> */}
				</a>
			</li>
			<li>
				<a href="/cart">
					<i class="fa fa-gift"></i>
					<strong>My Cart </strong>
				</a>
			</li>
			<li>
				<a href="">
					<i class="fa fa-globe"></i>
					<strong>billing Details</strong>
					<small>sweet home</small>
				</a>
			</li>
			<li>
				<a href="/orders">
					<i class="fa fa-comments-o"></i>
					<strong>Checkout</strong>
					<small>what they say</small>
				</a>
				
			</li>
			<li>
				<a href="">
					<i class="fa fa-picture-o"></i>
					<strong>Setting</strong>
					{/* <small>special order</small> */}
				</a>
			</li>
			
			
		</ul>
	</nav>
	<div className=' profile'>
	<div style={{marginBottom: '20px'}}> <FontAwesomeIcon icon={faUser} />   <strong>ID:</strong> 4HSSAD59864S23SAI </div>
	<div style={{marginBottom: '20px'}}> <FontAwesomeIcon icon={faUser} />   <strong>Name:</strong> {name}</div>
	<div style={{marginBottom: '20px'}} ><FontAwesomeIcon icon={faEnvelope} />   <strong>Email:</strong> {email}</div>
	<div style={{marginBottom: '20px'}}> <FontAwesomeIcon icon={faPhone} />   <strong>phoneNumber:</strong>EGY +20  1146223301</div>
	<div style={{marginBottom: '20px'}}><FontAwesomeIcon icon={faCalendarDays} />   <strong>Account creation:</strong> {createAt}</div>
	<div > <FontAwesomeIcon icon={faLocationDot} />  <strong>address :</strong> Qena-Qeft</div>
	</div>
</div>
</div>):(<Link to="/signin"></Link>)}



   
   <Footer/>
   </>
  );
};

export default DashboardHeader;
