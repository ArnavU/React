import { MenueCardHeader } from "./MenueCardHeader";
import MenueCards from "./MenueCards";
import Shimmer from "./Shimmer";
import useRestaurantMenue from "../utils/useRestaurantMenue";
import ResNameLocation from "./ResNameLocation";
import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenue = () => {
	const { resInfo, filteredData, tempFilteredData, restaurantLocation } = useRestaurantMenue();
	const [showIndex, setShowIndex] = useState(null);
	const dummy = "Dummy Data";

	if (resInfo === null) {
		return <Shimmer />;
	}

	return (
		<div className="menue w-[100%] flex flex-col items-center">
			<ResNameLocation restaurantLocation={restaurantLocation} />
      
			<button
				className="vegNonVeg-button p-2 rounded-lg text-white transition-all bg-red-600"
				onClick={(id) => {
					let element = id.currentTarget;
					element.classList.toggle("veg-button");
					if (element.innerText == "Veg & Non-Veg") {
						element.innerText = "Veg";
						element.style.backgroundColor = "green";
					} else {
						element.textContent = "Veg & Non-Veg";
						element.style.backgroundColor = "red";
					}
				}}>
				Veg & Non-Veg
			</button>

			{tempFilteredData.map((card, index) => {
				// console.log(card);
				
				return (<RestaurantCategory index={index} card={card} key={index} setShowIndex={(index)=>{setShowIndex(index)}} showIndex={showIndex} dummy={dummy}/>)
			})}
		</div>
	);
};

export default RestaurantMenue;
