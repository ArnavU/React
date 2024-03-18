import React from "react";
export function MenueCardHeader({ card }) {
  
	return (
		<h2
			className="menueCard-header"
			onClick={(id) => {
				let element = id.currentTarget;
				element.classList.toggle("menueCard-header-afterToggle");
				element.nextElementSibling?.classList?.toggle(
					"menueCards_toggle"
				); // console.log(id.nextElementSibling);
			}}>
			{card?.card?.card?.title} (
			{card.card.card.itemCards ? Array.from(card?.card?.card?.itemCards).length : 0})

		</h2>
	);
}
