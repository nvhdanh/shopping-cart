import './CartItem.css'

const CartItem = props => {
    const { quantity, image, title, onIncreaseCart, onClick } = props

    return (
        <div className="CartItem">
			<div className="CartItem-image">
				<img src={image} alt=""/>
			</div>
			<div className="CartItem-title">
				<p>{title}</p>
			</div>
			<div className="CartItem-btn-group">
				<button onClick = {onIncreaseCart}>+</button>
				<span>{quantity}</span>
				<button onClick = {onClick}>-</button>
			</div>
		</div>
    )
}

export default CartItem