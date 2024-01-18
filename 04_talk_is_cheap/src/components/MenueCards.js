import React from "react";

const MenueCards = (props) => {
  const { card } = props;

  return (
    <div className="menueCards">
      {card.card.card.itemCards.map((ele) => {
        return (
          <div key={ele.card.info.id} className="menueCard">

            {/* ul contains the li seen on the left side of the card */}
            <ul className="menueCardList">
              <li className="veg_bestseller">

                {/* veg or non-veg */}
                {(() => {
                  if (ele.card.info.itemAttribute.vegClassifier == "VEG") {
                    return <span className="imageVeg"></span>;
                  } else {
                    return <span className="imageNonVeg"></span>;
                  }
                })()}
                
                {/* Bestseller tag */}
                {(() => {
                  if (ele.card.info.isBestseller == true) {
                    return <div className="bestseller">Bestseller</div>;
                  }
                })()}
              </li>
              <li>{ele.card.info.name}</li>
              <li>₹ {ele.card.info.price / 100 || ele.card.info.defaultPrice / 100}</li>
              <br />
              <li className="description">{ele.card.info.description}</li>
            </ul>

            {/* Image of each card seen on the right side of the card */}
            {(() => {
              if (ele.card.info.imageId != null) {
                return (
                  <img
                    className="menueImg"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                      ele.card.info.imageId
                    }
                  />
                );
              }
            })()}
          </div>
        );
      })}
    </div>
  );
};

export default MenueCards;
