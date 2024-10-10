import React from 'react';
import './Product.css'; // Make sure to create a CSS file for styling
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../redux/api/ProductsApi';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/slice/cartSlice';
import { notification } from 'antd';
import fillLike from '../../assests/fillLike.svg'
import Likebtn from '../../assests/Like.svg'
import { useSelector } from 'react-redux'
import { addLike, removeLike } from '../../redux/slice/likeSlice'
import {Root} from '../../types/index'

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const dispatch = useDispatch();

  
  const { data: product, error, isLoading } = useGetSingleProductQuery(id);
  const likedProducts = useSelector((state: any) => state.like.likedProducts);
  const currency = useSelector((state: any) => state.currency.selected);

  const addToCart = () => {
    if (product) {
      dispatch(addCart(product));
      notification.success({
        message: 'Product Added To Cart',
      });
    }
  };

  const formatPrice = (price: string) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) return '';
    return currency === 'UZS' ? (numericPrice * 12500).toLocaleString() + ' UZS' : '$' + numericPrice.toFixed(2);
  };


  const toggleLike = (product: Root) => {
    if (likedProducts.some((likedProduct: Root) => likedProduct.id === product.id)) {
        dispatch(removeLike(product)); 
    } else {
        dispatch(addLike(product));
    }
};


  if (isLoading) return <div className='loading'><span className='loader'></span></div>;
  if (error) return <p>Error fetching product.</p>;

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.api_featured_image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">{formatPrice(product.price)}</p>
        <p>{product.description}</p>
        <div className="product-btns">
        <button onClick={addToCart} className="product-add-to-cart">
          Add to bag
        </button>
        <button onClick={() => toggleLike(product)} className='product-like-btn'>
        {likedProducts.some((likedProduct: Root) => likedProduct.id === product.id) ? <img src={fillLike} alt="" /> : <img src={Likebtn} alt="" /> }
        </button>
        </div>
        <p className="offer">Free delivery available</p>
        <div className="countdown">
          <p>Want it by tomorrow?</p>
          <p>Order by Midnight for Next Day Delivery.</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
