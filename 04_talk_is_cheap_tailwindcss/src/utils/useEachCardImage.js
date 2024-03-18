const useEachCardImage = (ele) => {
    if (ele.card.info.imageId != null) {
        return (
            <div className="w-40 shrink-0 mr-2 flex items-center m-[10px]">

                <img
                    className="h-40 object-cover rounded-md right-2"
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + ele.card.info.imageId}
                    />
            </div>
        );
    }
}

export default useEachCardImage;