import './ProductItem.css'

const ProductItem = props => {
    let { title, image, price, onClick, btnName } = props
    return (
        <div className="ProductItem">
			<div className="ProductItem-title">
				<p>{title}</p>
			</div>
			<div className="ProductItem-image">
				<img src={image} alt=""/>
			</div>
			<div className="ProductItem-price">
				<p>${price}</p>
				<button onClick = {onClick}>{btnName}</button>
			</div>
		</div>
    )
}

export default ProductItem