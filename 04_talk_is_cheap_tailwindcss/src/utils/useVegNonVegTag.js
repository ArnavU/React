
const useVegNonVegTag = (ele) => {
    const styledVeg= {
        height: "100px",
        border: "2px solid black",
        objectFit: 'fit',
        backgroundRepead: "no-repeat",
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrS7HEyktbrQLWJiJxfOhVTtKvpergo8EfzL0j1jeFNbZIiD9xQZD5ch7hXtSf9H9Iw00&usqp=CAU')",
    }

    const styledNonVeg= {
        height: "100px",
        width: "100px",
        border: "2px solid black",
        backgroundImage: "url('https://spng.pinpng.com/pngs/s/45-459786_non-veg-icon-circle-hd-png-download.png')",
    }
    if (
        ele?.card?.info?.itemAttribute?.vegClassifier == "VEG"
    ) {
        return (
            <div className="imageVeg h-[15px]" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrS7HEyktbrQLWJiJxfOhVTtKvpergo8EfzL0j1jeFNbZIiD9xQZD5ch7hXtSf9H9Iw00&usqp=CAU" height={"15px"} width={"15px"}/></div>
            );
        } else {
            return (
            <div className="imageVeg h-[15px]" ><img src="https://spng.pinpng.com/pngs/s/45-459786_non-veg-icon-circle-hd-png-download.png" height={"15px"} width={"15px"}/></div>
        );
    }
}

export default useVegNonVegTag;
