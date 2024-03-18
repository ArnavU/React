import React from "react";
import { useState } from "react";
import MenueCards from "./MenueCards";
import { MenueCardHeader } from "./MenueCardHeader";

const RestaurantCategory = ({index, card, showIndex, setShowIndex, dummy}) => {

	const handleClick = () => {
        if(index == showIndex) {
            setShowIndex(null);
        }
        else {
            setShowIndex(index);
        }
	};
	return (
		<div
			className="menueCardList-container rounded-md bg-gray-50 w-[60%] mt-4 shadow-lg">
			{/* Title of each menue card */}
			<div className="cursor-pointer shadow-xl" onClick={handleClick}>
				<MenueCardHeader card={card} />
			</div>

			{(showIndex==index && true) && (
				<div className="listOfMenue bg-gray-100 w-[100%]">
					<MenueCards card={card} dummy={dummy} />
				</div>
			)}
		</div>
	);
}

export default RestaurantCategory;