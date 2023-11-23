import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { authContext } from "../Contexts/isAuth";
import  { useContext } from "react";

export default function MenuPopupState({ logout, setLogin }) {

  const {displayName }= useContext(authContext)

  // const { setDisplayName } = useContext(authContext); // Access setDisplayName function from context
  const navigate = useNavigate(); 

  const handleLogout = async (popupState) => {
    await logout();
    localStorage.removeItem('token');
    setLogin(false);
    popupState.close(); // Close the menu after logout
  };

  const handleCheckout = (popupState) => {
    navigate('/checkout'); // Redirect to "/checkout"
    popupState.close(); // Close the menu after redirect
  };

  const buttonStyle = {
    backgroundColor: 'transparent', // Set to transparent to remove the background color
    boxShadow: 'none', // Optional: Remove box shadow if any
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" style={buttonStyle} {...bindTrigger(popupState)}>
            {/* Dashboard */}
            hello,{displayName}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {/* <MenuItem onClick={popupState.close}>Profile</MenuItem>  */}
            <MenuItem onClick={() => handleCheckout(popupState)}>My Checkout</MenuItem>
            <MenuItem onClick={() => handleLogout(popupState)}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}