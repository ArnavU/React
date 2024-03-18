import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  

  // when the components the dependency changes in the useEffect
  useEffect(()=> {
    console.log("useEffect Called");
  }, [])
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: { useOnlineStatus() ? "🟢" : "🔴"}</li>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About Us</Link></li>
          <li><Link to={'/contact'}>Contact Us</Link></li>
          <li>Cart</li>
          <li><Link to={'/grocerry'}>Grocerry</Link></li>
          <button className="btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
