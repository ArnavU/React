import RestaurantCard from "./RestaurantCard";
import resList from "../utils.js/mockData"
import { useState } from 'react';

const Body = () => {
    // Local State Variable -> Super powerful variable -> hooks
    // listOfRestaurants is a state variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    // array destructuring

    return (
      <div className="body">
        
        <button className="filter-btn"
            onClick={()=>{
                const filteredList = listOfRestaurants.filter((res)=> {
                    return res.info.avgRating >= 4;
                })
                setListOfRestaurant(filteredList);
            }}>
            Top Rated Restaurants
        </button>

        <div className="res-container">
          {/* restaurantCards */}
          {/* {RestaurantCard()} */}
          {/* <RestaurantCard
            resName="Meghana Foods"
            cuisine="Biriyani, North Indian, Asian"
          /> */}
          {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
  
          {listOfRestaurants.map((restaurant) => {
            return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          })}
  
        </div>
      </div>
    );
  };

export default Body;