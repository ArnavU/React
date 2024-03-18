import React from "react";

function ResNameLocation({restaurantLocation}) {
	return (
		<div className="resNameLocation">
			<span className="resName">{restaurantLocation.name}</span> <br></br>
			{/* <span className="resCity">{restaurantLocation.city} </span> */}

			<span className="deliveryTime">
				{restaurantLocation.sla.slaString}
			</span>{" "}

			<br></br>

			<span className="location">
				{restaurantLocation.labels[1].message}
			</span>
		</div>
	);
}

export default ResNameLocation;
