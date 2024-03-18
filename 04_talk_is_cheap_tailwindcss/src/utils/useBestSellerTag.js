const useBestsellerTag = (ele) => {
    if (ele.card.info.isBestseller == true) {
        return (
            <div className="bestseller">
                Bestseller
            </div>
        );
    }
}

export default useBestsellerTag;