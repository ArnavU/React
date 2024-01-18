import RestaurantCard from "./RestaurantCard";
// import resList from "../utils.js/mockData"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// let p = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
// p.then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log("Swiggy API");
//   console.log(data);
// })

const Body = () => {
  // Local State Variable -> Super powerful variable -> hooks
  // listOfRestaurants is a state variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  // array destructuring
  const [tempListOfRestaurants, setTempListOfRestaurants] = useState([]);

  // Whenever state variables update, react triggers a reconciliation cycle(re-render the components)
  console.log("Body rendered");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    console.log(jsonData);

    // console.log(jsonData);

    // optional chaining
    setListOfRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setTempListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const [searchText, setSearchText] = useState("");

  // conditional rendering
  if (listOfRestaurants.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setTempListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating >= 4;
            });
            setTempListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {/* restaurantCards */}
        {/* {RestaurantCard()} */}
        {/* <RestaurantCard
            resName="Meghana Foods"
            cuisine="Biriyani, North Indian, Asian"
          /> */}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}

        {tempListOfRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurants/" + restaurant.info.id } key={restaurant.info.id} className="link-without-textDecoration"><RestaurantCard resData={restaurant} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
