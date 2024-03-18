import RestaurantCard from "./RestaurantCard";
// import resList from "../utils.js/mockData"
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/useUserContext";

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
  const [listOfRestaurants, setListOfRestaurant] = useState([]); // this will run only when the component is mounted on the page || it will not run during re-rerendering
  console.log(listOfRestaurants);
  
  // array destructuring
  const [tempListOfRestaurants, setTempListOfRestaurants] = useState([]);

  // Whenever state variables update, react triggers a reconciliation cycle(re-render the components)
  console.log("Body rendered");

  const data = useContext(UserContext);
  console.log(data.loggedInUser);

  // other way
  const {loggedInUser} = data;
  console.log(loggedInUser);

  const {setUserName} = data;

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

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

  if(!useOnlineStatus()) {
    return (
      <h3>Looks like you have lost your internet connection</h3>
    )
  }

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
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-solid border-black border-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
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

          <input id="input-box" type="text" className="px-2 border-2 border-black" value={loggedInUser} onInput={(e)=>{
            setUserName(e.target.value);
          }}/>
          <label for="input-box"> Change name</label>
        </div>

        <button
          className="filter-btn m-4 p-4 bg-gray-100 rounded-lg"
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

      <div className="res-container flex flex-wrap justify-center">
        {tempListOfRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurants/" + restaurant.info.id } key={restaurant.info.id} className=""><RestaurantCard resData={restaurant} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
