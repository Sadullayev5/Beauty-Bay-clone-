import React from 'react'
import './Edited.css'
import { Link } from 'react-router-dom'
import EditedImg from '../../assests/Edited.png'
import { useGetProductsQuery } from '../../redux/api/ProductsApi'

const Edited : React.FC = () => {
    const {data , isLoading} = useGetProductsQuery('')
    const editedProducts = data?.slice(20 , 30)
  
    if(isLoading){
        return(
            <div className="loading">
                <span className='loader'></span>
            </div>
        )
    }else{
        return (
            <div className='edited-wrapper'>
                <div className="edited-content">
                <img src={EditedImg} alt="" />
                <p>Discover the latest and greatest in beauty, including tutorials, trends, reviews and advice</p>
                </div>
                <div className="edited-cards">
                    {
                        editedProducts?.map((product : any) =>
                            <div key={product.id} className="edited-card">
                                <Link to={`/product/${product.id}`}><img src={product.api_featured_image} alt="" /></Link>
                                <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
                            </div>
                        )
                    }
                </div>
            </div>
          )
    }
}

export default Edited