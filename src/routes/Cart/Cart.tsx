
import { GoTriangleDown } from "react-icons/go"; 
import { GoTriangleUp } from "react-icons/go"; 
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Root } from '../../types/index';
import './Cart.css';
import { addCart, removeCart, clearCart, clearItemCart } from '../../redux/slice/cartSlice';

const Cart: React.FC = () => {
  const currency = useSelector((state: any) => state.currency.selected);
  const cartProducts = useSelector((state: any) => state.cart.Products);
  const dispatch = useDispatch();
  let totalSum = 0;

  const handleSum = () => {
    for (let i = 0; i < cartProducts.length; i++) {
      totalSum += cartProducts[i].price * cartProducts[i].quantity;
    }
  };

  const formatPrice = (price: number) => {
    const numericPrice = price;
    if (isNaN(numericPrice)) return '';
    return currency === 'UZS' 
      ? (numericPrice * 12500).toLocaleString() + ' UZS' 
      : '$' + numericPrice.toFixed(2);
  };

  handleSum();

  const addtoCart = (product: Root) => {
    dispatch(addCart(product));
  };

  const handleRemove = (product: Root) => {
    if (product.quantity > 1) {
      dispatch(removeCart(product));
    }
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const handleClearItem = (product: Root) => {
    dispatch(clearItemCart(product));
  };

  if (cartProducts.length > 0) {
    return (
      <div className="cart-wrapper">
        <h2>Cart</h2>
        <button className="clear-cart" onClick={handleClear}>Clear Cart</button>
        <div className="cart-products">
          {cartProducts?.map((product: any) => (
            <div key={product.id} className="cart-product">
              <Link to={`/product/${product.id}`}>
                <img src={product.api_featured_image} alt="" />
              </Link>
              <div className="cart-product-info">
                <Link to={`/product/${product.id}`}>
                  <h3>{product.name}</h3>
                </Link>
                <p>{formatPrice(product.price * product.quantity)}</p> 
                <div className="quantity">
                  <p>Qty:{product.quantity}</p>
                  <div className="cart-buttons">
                    <button onClick={() => addtoCart(product)} className="add-to-cart">
                      <GoTriangleUp />
                    </button>
                    <button onClick={() => handleRemove(product)} className="remove-cart">
                      <GoTriangleDown />
                    </button>
                  </div>
                </div>
                <button onClick={() => handleClearItem(product)} className="delete-item">Delete</button>
              </div>
            </div>
          ))}
          <div className="total">
            <h3>Total: {formatPrice(totalSum)}</h3> 
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-wrapper">
        <h2>Cart</h2>
        <div className="cart-products">
          <h4>Cart is empty</h4>
        </div>
      </div>
    );
  }
};

export default Cart;
