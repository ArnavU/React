import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./MenueCards";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(clearCart());
    }

	return (
		<div className="m-4 p-4 flex flex-col items-center">
			<div className="text-2xl font-bold">Cart</div>
			<div className="mb-5">
				<button className="p-2 m-2 bg-black text-white rounded-xl cursor-pointer"
                    onClick={clickHandler}>
					Clear Cart
				</button>
			</div>
            {cartItems.length===0 && <div>Cart is empty. Add items to the cart!</div>}
			<div className="menueCardList-container rounded-md bg-gray-50 w-[60%] mt-4 shadow-lg">
				{ItemList(cartItems)}
			</div>
		</div>
	);
};

export default Cart;
