import React from "react";
export function MenueCardHeader({ card }) {
	return (
		<div className="h-[50px] flex items-center pl-2 pr-2 justify-between rounded-md">
			<h2 className="menueCard-header">
				{card?.card?.card?.title} (
				{card.card.card.itemCards ? Array.from(card?.card?.card?.itemCards).length : 0}
				)
			</h2>
			<span>🔽</span>
		</div>
	);
}
