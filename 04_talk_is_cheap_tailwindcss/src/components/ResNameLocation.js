import { zip } from "lodash";
import React from "react";

function ResNameLocation({restaurantLocation}) {
	
	return (
		<div className="resNameLocation flex text-center mt-[20px] flex-col">
			<span className="resName font-bold">{restaurantLocation.name}</span> <br></br>
			{/* <span className="resCity">{restaurantLocation.city} </span> */}

			<span className="deliveryTime">
				{/* {restaurantLocation.sla.slaString} */}
			</span>

			<span className="location">
				{/* {restaurantLocation.labels[1].message} */}
			</span>
		</div>
	);
}

export default ResNameLocation;
