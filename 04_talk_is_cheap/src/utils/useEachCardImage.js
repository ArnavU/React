const useEachCardImage = (ele) => {
    if (ele.card.info.imageId != null) {
        return (
            <img
                className="menueImg"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + ele.card.info.imageId}
            />
        );
    }
}

export default useEachCardImage;