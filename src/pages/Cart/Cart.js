import { useSelector, useDispatch } from "react-redux";

import CartItem from "../../components/CartItem/CartItem";
import { increaseCart, decreaseCart, deleteCart } from '../../store/actions/Cart'
import "./Cart.css";

const Cart = (props) => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch()
    const onIncreaseCart = (product) => dispatch(increaseCart(product))
    const onDecreaseCart = (product) => dispatch(decreaseCart(product))
    const onDeleteCart = (product) => dispatch(deleteCart(product))

    let cart = products.map((product) => product.quantity === 1 ?
				<CartItem
					key={product.id}
					title={product.title}
					image={product.image}
					quantity={product.quantity}
					onIncreaseCart={()=>onIncreaseCart(product)}
					onClick={()=>onDeleteCart(product)}
				/>:
				<CartItem
					key={product.id}
					title={product.title}
					image={product.image}
					quantity={product.quantity}
					onIncreaseCart={()=>onIncreaseCart(product)}
					onClick={()=>onDecreaseCart(product)}
				/>
				
			)

    if (!products.length) {
    	cart = <div>Nothing to display!</div>
    }

    return (

        <div className="Cart">
			{cart}
		</div>
    );
};

export default Cart;