import { MenueCardHeader } from "./MenueCardHeader";
import MenueCards from "./MenueCards";
import Shimmer from "./Shimmer";
import useRestaurantMenue from "../utils/useRestaurantMenue";
import ResNameLocation from "./ResNameLocation";

const RestaurantMenue = () => {
	const { resInfo, filteredData, tempFilteredData, restaurantLocation } = useRestaurantMenue();

	if (resInfo === null) {
		return <Shimmer />;
	}

	return (
		<div className="menue">
			<ResNameLocation restaurantLocation={restaurantLocation} />
      
			<button
				className="vegNonVeg-button"
				onClick={(id) => {
					let element = id.currentTarget;
					element.classList.toggle("veg-button");
					if (element.innerText == "Veg & Non-Veg") {
						element.innerText = "Veg";
					} else {
						element.textContent = "Veg & Non-Veg";
					}
				}}>
				Veg & Non-Veg
			</button>

			{tempFilteredData.map((card, index) => {
				let vegCard = null;
				// console.log(card.card.card[0].info.itemAttribute.vegClassifier);

				return (
					<div key={index} className="menueCardList-container">
						{/* Title of each menue card */}
						<MenueCardHeader card={card} />

						<MenueCards card={card} />
					</div>
				);
			})}
		</div>
	);
};

export default RestaurantMenue;
