import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";

import ProductItem from "../../components/ProductItem/ProductItem";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./ProductList.css";

import { addCart, increaseCart } from '../../store/actions/Cart'

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch()
    const onAddCart = (product) => dispatch(addCart(product))
    const onIncreaseCart = (product) => dispatch(increaseCart(product))

    const productsInCart = useSelector(state => state.cart.productsInCart)

    useEffect(() => {
        const getProductList = async () => {
            let response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        };
        getProductList();
    }, []);

    let productList = products.map(product => productsInCart.includes(product.id) ?
        <ProductItem
            key={product.id}
            
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}

            onClick = {()=>onIncreaseCart(product)}
            btnName="Add More"
        /> :
        <ProductItem
            key={product.id}

            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}

            onClick = {()=>onAddCart(product)}
            btnName="Add to Cart"
        />

    );

    if (!products.length) {
        productList = <Spinner />;
    }
    return <div className="ProductList">{productList}</div>;
};

export default ProductList;