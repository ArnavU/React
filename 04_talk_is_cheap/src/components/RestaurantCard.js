import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
  textDecoration: "none"
};

const RestaurantCard = (props) => {
  // console.log(props.resData.info.name);

  // we can even destructure the props
  const { resData } = props;
  // otherwise use
  // <h3>{props.resData.info.name}</h3>

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData.info.sla;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        // src={CDN_URL + cloudinaryImageId} => will work
      />
      
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4> 

      {/*
      <h3>{resData.info.name}</h3>
      <h4>{resData["info"]["cuisines"].join(", ")}</h4>
      <h4>{resData["info"]["avgRating"]} stars</h4>
      <h4>{resData["info"]["sla"]["deliveryTime"]} minutes</h4>
      <h4>{resData["info"]["costForTwo"]}</h4> 
      */}
    </div>
  );
};

export default RestaurantCard;
