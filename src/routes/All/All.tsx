import React from 'react';
import './All.css';
import { useLocation } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../redux/api/ProductsApi';
import { Link } from 'react-router-dom';
import fillLike from '../../assests/fillLike.svg'
import Likebtn from '../../assests/Like.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addLike, removeLike } from '../../redux/slice/likeSlice'
import {Root} from '../../types/index'
import { notification } from 'antd';
import { addCart } from '../../redux/slice/cartSlice'
import { useGetProductsQuery } from '../../redux/api/ProductsApi'


const All: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  const dispatch = useDispatch();
    const likedProducts = useSelector((state: any) => state.like.likedProducts);
    const currency = useSelector((state: any) => state.currency.selected);
    

    const { data: products = [], error, isLoading } = searchQuery
    ? useGetCategoriesQuery(searchQuery, { skip: !searchQuery })
    : useGetProductsQuery('');

    const ProductsSlice = products?.slice(0, 150);

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

    const addtoCart = (product: Root) => {
        dispatch(addCart(product));
        notification.success({
            message: 'Product Added To Cart',
          });
    }


  return (
    <div className='all-products-wrapper'>
      <div className="all-products">
        {isLoading && <div className='loading'><span className='loader'></span></div>}
        {error && <p>Error fetching products.</p>}
        {ProductsSlice?.map((product: any) => (
          <div key={product.id} className="all__product">
            <Link to={`/product/${product.id}`}>
              <img src={product.api_featured_image} alt={product.name} />
            </Link>
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
            </Link>
            <p>{formatPrice(product.price)}</p>
            <button onClick={() => addtoCart(product)} className="add-to-bag">Add to cart</button>
            <button onClick={() => toggleLike(product)} className='all-like-btn'>
                {likedProducts.some((likedProduct: Root) => likedProduct.id === product.id) ? <img src={fillLike} alt="" /> : <img src={Likebtn} alt="" /> }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;

