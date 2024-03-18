
const useVegNonVegTag = (ele) => {
    if (
        ele?.card?.info?.itemAttribute?.vegClassifier == "VEG"
    ) {
        return (
            <span className="imageVeg"></span>
        );
    } else {
        return (
            <span className="imageNonVeg"></span>
        );
    }
}

export default useVegNonVegTag;
