import { BsFillTrash3Fill } from "react-icons/bs"; 
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux'
import { notification } from 'antd'
import {Root} from '../../types/index'
import { removeLike } from '../../redux/slice/likeSlice'
import './Liked.css'

const Liked : React.FC = () => {

    const likedProducts = useSelector((state: any) => state.like.likedProducts);
    const dispatch = useDispatch();

    const addtoCart = (product: Root) => {
        dispatch(addCart(product));
        notification.success({
            message: 'Product Added To Cart',
          });
    }

    const toggleLike = (product: Root) => {
            dispatch(removeLike(product));      
    };

  if(likedProducts.length > 0){
    return (
        <div className='liked-wrapper'>
            <h2>Wishlist</h2>
            <div className="liked-products">
                {
                    likedProducts?.map((product : any) =>
                        <div key={product.id} className="liked-product">
                            <Link to={`/product/${product.id}`}><img src={product.api_featured_image} alt="" /></Link>
                            <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
                            <p>${product.price}</p>
                            <button onClick={() => addtoCart(product)} className="add-to-bag" >Add to cart</button>
                            <button onClick={() => toggleLike(product)} className="remove-like"><BsFillTrash3Fill /></button>
                        </div>
                    )
                }
            </div>
        </div>
      )
  }else{
    return(
        <div className='liked-wrapper'>
            <h2>Wishlist</h2>
            <div className="liked-products-empty">
                <h3>No products in wishlist</h3>
            </div>
        </div>
    )
  }
}

export default Liked