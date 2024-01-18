import MenueCards from "./MenueCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENUE_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenue = () => {
  const [resInfo, setResInfo] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [tempFilteredData, setTempFilteredData] = useState(null);
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const { resId } = useParams();
  console.log(resId);
  
  //   console.log(filteredData);

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
            json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.length;
            console.log("Card Item");
            
          console.log(cardItem);
          
          return index > 1 && index < length - 2;
        }
      )
    );

    setTempFilteredData(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (cardItem, index) => {
          let length =
            json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.length;

          return index > 1 && index < length - 2;
        }
      )
    );

    setRestaurantLocation(json.data.cards[0].card.card.info);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="menue">
      {(() => {
        const data = tempFilteredData;
        console.log(restaurantLocation.name);

        // console.log("HI", Array.from(data).length);
      })()}

      <div className="resNameLocation">
          <span className="resName">{restaurantLocation.name}</span> <br></br>
          {/* <span className="resCity">{restaurantLocation.city} </span> */}
          <span className="deliveryTime">{restaurantLocation.sla.slaString}</span> <br></br>
          <span className="location">{restaurantLocation.labels[1].message}</span>
      </div>

      {tempFilteredData.map((card, index) => {
        let vegCard = null;
        // console.log(card.card.card[0].info.itemAttribute.vegClassifier);
        
        console.log(restaurantLocation.labels[1].message);
        
        return (
          <div key={index} className="menueCardList-container">

            <button className="vegNonVeg-button" onClick={(id)=>{
              let element = id.currentTarget;
              element.classList.toggle('veg-button');
              if(element.innerText == "Veg & Non-Veg") {
                element.innerText = "Veg"

              }
              else {
                element.textContent = "Veg & Non-Veg";
              }
            }}>Veg & Non-Veg</button>

            {/* Title of each menue card */}
            <h2
              className="menueCard-header"
              onClick={(id) => {
                let element = id.currentTarget;
                console.log(element);

                element.classList.toggle("menueCard-header-afterToggle");
                element.nextElementSibling.classList.toggle(
                  "menueCards_toggle"
                );
                // console.log(id.nextElementSibling);
              }}
            >
              {card.card.card.title} (
              {Array.from(card.card.card.itemCards).length})
            </h2>
            
            
            <MenueCards card={card} />
          </div>
        );
      })}

      {/* {resInfo.map((item)=> {
        return (<h2>{item.card.info.name}</h2>)
      })} */}
    </div>
  );
};

export default RestaurantMenue;
