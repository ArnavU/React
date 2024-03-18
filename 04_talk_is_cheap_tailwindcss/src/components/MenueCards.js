import React from "react";
import useVegNonVegTag from "../utils/useVegNonVegTag";
import useBestsellerTag from "../utils/useBestSellerTag";
import useEachCardImage from "../utils/useEachCardImage";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const MenueCards = ({card, dummy}) => {
	const [list, setList] = useState([]);
	const [tempList, setTempList] = useState([]);
	
	
	useEffect(() => {
		console.log(dummy);
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
		buttonEle.addEventListener("click", () => {
			if (buttonEle.innerText == "Veg & Non-Veg") {
				filterVeg();
			} else {
				setTempList(card?.card?.card?.itemCards);
				// doubt => if "list" is used instead of "card?.card?.card?.itemCards" then it will run 
				// quite well for few clicks then will give incorrect result
			}
		});
	}, []);

	return ItemList(tempList);
};

export const ItemList = (tempList) => {
	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		// Dispatch an action
		dispatch(addItem(item))
		console.log(item);
	}

	return (
		<div className="menueCards">
			{/* Optional chaining is imp */}

			{tempList?.map((ele) => {
				return (
					<div key={ele?.card?.info?.id} className="menueCard flex relative min-h-40 border-b-[3px] border-b-gray-500 box-border justify-between">
						{/* ul contains the li seen on the left side of the card */}
						<ul className="menueCardList p-2">
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
						<div>
							<div className="absolute bottom-[0px]">
								<button className="w-[61px] p-2 mx-16 rounded-lg bg-black text-white shadow-lg" 
								onClick={()=> handleAddItem(ele)}>
									Add +
								</button>
							</div>
							<div className="w-40">
								{useEachCardImage(ele)}
							</div>
						</div>
					</div>
				);
			})}
		</div>

	)
}

export default MenueCards;
