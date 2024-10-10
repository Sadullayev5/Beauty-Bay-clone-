
// import React from 'react'
// import './RecommendedProducts.css'
// import { useGetProductsQuery } from '../../redux/api/ProductsApi'
// import { Link } from 'react-router-dom'
// import fillLike from '../../assests/fillLike.svg'
// import Likebtn from '../../assests/Like.svg'
// import { useDispatch, useSelector } from 'react-redux'
// import { addLike, removeLike } from '../../redux/slice/likeSlice'
// import {Root} from '../../types/index'
// import shoppingbag from '../../assests/shoppingbag.svg'
// import { addCart } from '../../redux/slice/cartSlice'
// import { notification } from 'antd'



// const RecommendedProducs : React.FC = () => {
//     const {data , isLoading} = useGetProductsQuery('')
//     const RecProducts = data?.slice(0 , 10)
//     const dispatch = useDispatch();
//     const likedProducts = useSelector((state: any) => state.like.likedProducts);

    


//     const toggleLike = (product: Root) => {
//         if (likedProducts.some((likedProduct: Root) => likedProduct.id === product.id)) {
//             dispatch(removeLike(product)); 
//         } else {
//             dispatch(addLike(product));
//         }
//     };

//     const addtoCart = (product: Root) => {
//         dispatch(addCart(product));
//         notification.success({
//             message: 'Product Added To Cart',
//           });
//     }

//     if(isLoading){
//         return(
//             <div className="loading">
//                 <span className='loader'></span>
//             </div>
//         )
//     }

//   else{
//     return (
//         <div className='rec-products-wrapper'>
//             <h2>Flying of the Shelves</h2>
//             <div className="rec-products">
//             {
//                     RecProducts?.map((product : any) =>
//                         <div key={product.id} className="rec-product">
//                             <Link to={`/product/${product.id}`}><img src={product.api_featured_image} alt="" /></Link>
//                             <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
//                             <p>{product.brand}</p>
//                             <strong>{product.price}</strong>
//                             <div className="rec-product-links">
//                             <button onClick={() => toggleLike(product)} className='like-btn'>
//                             {likedProducts.some((likedProduct: Root) => likedProduct.id === product.id) ? <img src={fillLike} alt="" /> : <img src={Likebtn} alt="" /> }
//                             </button>
//                             <button onClick={() => addtoCart(product)} className='bag-btn'>
//                             <img src={shoppingbag} alt="" />
//                             </button>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>
//       )
//     }
  
// }

// export default RecommendedProducs

import React from 'react';
import './RecommendedProducts.css';
import { useGetProductsQuery } from '../../redux/api/ProductsApi';
import { Link } from 'react-router-dom';
import fillLike from '../../assests/fillLike.svg';
import Likebtn from '../../assests/Like.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../../redux/slice/likeSlice';
import { Root } from '../../types/index';
import shoppingbag from '../../assests/shoppingbag.svg';
import { addCart } from '../../redux/slice/cartSlice';
import { notification } from 'antd';

const RecommendedProducs: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery('');
  const RecProducts = data?.slice(0, 10);
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: any) => state.like.likedProducts);
  const currency = useSelector((state: any) => state.currency.selected); 

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
  };
  const formatPrice = (price: string) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) return '';
    return currency === 'UZS' ? (numericPrice * 12500).toLocaleString() + ' UZS' : '$' + numericPrice.toFixed(2);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  } else {
    return (
      <div className="rec-products-wrapper">
        <h2>Flying off the Shelves</h2>
        <div className="rec-products">
          {RecProducts?.map((product: any) => (
            <div key={product.id} className="rec-product">
              <Link to={`/product/${product.id}`}>
                <img src={product.api_featured_image} alt="" />
              </Link>
              <Link to={`/product/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <p>{product.brand}</p>
              <strong>{formatPrice(product.price)}</strong> 
              <div className="rec-product-links">
                <button onClick={() => toggleLike(product)} className="like-btn">
                  {likedProducts.some((likedProduct: Root) => likedProduct.id === product.id) ? (
                    <img src={fillLike} alt="" />
                  ) : (
                    <img src={Likebtn} alt="" />
                  )}
                </button>
                <button onClick={() => addtoCart(product)} className="bag-btn">
                  <img src={shoppingbag} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default RecommendedProducs;
