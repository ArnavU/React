import React from "react";
import useVegNonVegTag from "../utils/useVegNonVegTag";
import useBestsellerTag from "../utils/useBestSellerTag";
import useEachCardImage from "../utils/useEachCardImage";
import { useState, useEffect } from "react";

const MenueCards = (props) => {
	const { card } = props;
	const [list, setList] = useState([]);
	
	const [tempList, setTempList] = useState([]);

	useEffect(() => {
		console.log("Use effect called");
		
		setList(card?.card?.card?.itemCards);
		setTempList(card?.card?.card?.itemCards);

		const filterVeg = () => {
			setTempList( 				
				card?.card?.card?.itemCards?.filter((ele) => {
					return (
						ele?.card?.info?.itemAttribute?.vegClassifier == "VEG"
					);
				})
			);
		};

		let buttonEle = document.querySelector(".vegNonVeg-button");
		buttonEle.addEventListener("click", function (){
			if (buttonEle.innerText == "Veg & Non-Veg") {
				filterVeg();
			} else {
				setTempList(card?.card?.card?.itemCards);
				// doubt => if "list" is used instead of "card?.card?.card?.itemCards" 
				// then it will give incorrect result
			}
		});
	}, []);

	return (
		<div className="menueCards">
			{/* Optional chaining is imp */}

			{tempList?.map((ele) => {
				return (
					<div key={ele?.card?.info?.id} className="menueCard">
						{/* ul contains the li seen on the left side of the card */}
						<ul className="menueCardList">
							<li className="veg_bestseller">
								{useVegNonVegTag(ele)}
								{useBestsellerTag(ele)}
							</li>
							<li>{ele?.card?.info?.name}</li>
							<li>
								₹{" "}
								{ele?.card?.info?.price / 100 ||
									ele?.card?.info?.defaultPrice / 100}
							</li>
							<br />
							<li className="description">
								{ele?.card?.info?.description}
							</li>
						</ul>

						{/* Image of each card seen on the right side of the card */}
						{useEachCardImage(ele)}
					</div>
				);
			})}
		</div>
	);
};

export default MenueCards;
