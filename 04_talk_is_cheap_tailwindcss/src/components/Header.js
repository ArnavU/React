import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/useUserContext";
import { useSelector } from "react-redux";

const Header = () => {
	// let btnName = "Login";
	const [btnName, setBtnName] = useState("Login");

	const { loggedInUser } = useContext(UserContext);
	// console.log(loggedInUser);

	// Selector (to subscribe to the store) || data changes -> UI changes
	const cartItems = useSelector((store) => store.cart.items);

	// when the components the dependency changes in the useEffect
	useEffect(() => {
		console.log("useEffect Called");
	}, []);

	return (
		<div className="flex justify-between bg-pink-100 shadow-lg mt-2 items-center lg:bg-yellow-200 md:bg-sky-200">
			<div className="logo-container">
				<img className="w-56" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul className="flex p-4 m-4 items-center">
					<li className="px-4">
						Online Status: {useOnlineStatus() ? "🟢" : "🔴"}
					</li>
					<li className="px-4">
						<Link to={"/"}>Home</Link>
					</li>
					<li className="px-4">
						<Link to={"/about"}>About Us</Link>
					</li>
					<li className="px-4">
						<Link to={"/contact"}>Contact Us</Link>
					</li>
					<li className="px-4 font-bold text-xl">
						<Link to="/cart">Cart ({cartItems.length} items)</Link>
					</li>
					<li className="px-4">
						<Link to={"/grocerry"}>Grocerry</Link>
					</li>
					<li className="px-4 font-bold">{loggedInUser}</li>
					<button
						className="btn"
						onClick={() => {
							btnName === "Login"
								? setBtnName("Logout")
								: setBtnName("Login");
						}}>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
