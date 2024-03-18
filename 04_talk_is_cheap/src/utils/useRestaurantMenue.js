import { MENUE_API } from "./constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useRestaurantMenue = () => {
	const [resInfo, setResInfo] = useState(null);
	const [filteredData, setFilteredData] = useState(null);
	const [tempFilteredData, setTempFilteredData] = useState(null);
	const [restaurantLocation, setRestaurantLocation] = useState("");

	const { resId } = useParams();

	useEffect(() => {
		fetchMenue();
	}, []);
	// 23719&catalog_qa=undefined&submitAction=ENTER
	const fetchMenue = async () => {
		const data = await fetch(
			MENUE_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
		);
		const json = await data.json();
		setResInfo(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

		// console.log(resInfo);

		setFilteredData(
			json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
				(cardItem, index) => {
					let length =
						json.data.cards[2].groupedCard.cardGroupMap.REGULAR
							.cards.length;
					return index > 1 && index < length - 2;
				}
			)
		);

		setTempFilteredData(
			json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
				(cardItem, index) => {
					let length =
						json.data.cards[2].groupedCard.cardGroupMap.REGULAR
							.cards.length;
					return index > 1 && index < length - 2;
				}
			)
		);

		setRestaurantLocation(json.data.cards[0].card.card.info);
	};

	return { resInfo, filteredData, tempFilteredData, restaurantLocation };
};

export default useRestaurantMenue;
