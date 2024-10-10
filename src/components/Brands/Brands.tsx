import React from 'react'
import './Brands.css'
import BeautyBay from '../../assests/BeautyBay.png'
import Janeiro from '../../assests/SoldeJanerio.png'
import Beekman from '../../assests/Beekman.png'
import Ordinary from '../../assests/Ordinary.png'
import Anua from '../../assests/Anua.png'
import Mitchell from '../../assests/Mitchel.png'
import Josoen from '../../assests/Josoen.png'
import { Link } from 'react-router-dom'

const Brands : React.FC = () => {

    const cards = [
        {id: 1, title: 'BY BEAUTY BAY' , image: BeautyBay},
        {id: 2, title: 'SOL DE JANERIO' , image: Janeiro},
        {id: 3, title: 'BEEKMAN 1802' , image: Beekman},
        {id: 4, title: 'THE ORDINARY' , image: Ordinary},
        {id: 5, title: 'ANUA' , image: Anua},
        {id: 6, title: 'MADE BY MITCHELL' , image: Mitchell},
        {id: 7, title: 'BEAUTY OF JOSOEN' , image: Josoen},
    ]

  return (
    <div className='brands'>
      <h2>Shop By Brand</h2>
      <div style={{
        display: "flex",
        overflowX: "auto",  
        gap: "24px",        
        paddingBottom: "10px"
      }}>
        {cards.map((card) => (
          <div key={card.id} className='card-slider'>
            <Link to='/'><img src={card.image} alt="" /></Link>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands