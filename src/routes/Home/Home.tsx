import { AiFillCaretRight } from "react-icons/ai"; 
import React from 'react'
import banner from '../../assests/banner.png'
import { Link } from 'react-router-dom'
import './Home.css'
import trio1 from '../../assests/Trading-Trio-1.gif'
import trio2 from '../../assests/Tranding-Trio-2.png'
import trio3 from '../../assests/Trending-Trio-3.png'
import tile from '../../assests/tiles.png'
import Brands from "../../components/Brands/Brands";
import RecommendedProducs from "../../components/RecommendedProducts/RecommendedProducs";
import CtaBanner from '../../assests/cta-banner.png'
import Edited from "../../components/Edited/Edited";


const Home : React.FC = () => {

  


  return (
    <div className="container">
        <div className="categories">
            <ul className='categories-list'>
            <li><Link to='/all'>Gifting</Link></li>
            <li><Link to='/all'>Offers</Link></li>
            <li><Link to='/all'>By BEAUTY BAY</Link></li>
            <li><Link to='/all'>New & Trending</Link></li>
            <li><Link to='/all'>Brands</Link></li>
            <li><Link to='/all'>Makeup</Link></li>
            <li><Link to='/all'>Skincare</Link></li>
            <li><Link to='/all'>Haircare</Link></li>
            <li><Link to='/all'>Fragrance</Link></li>
            <li><Link to='/all'>Body Care</Link></li>
            <li><Link to='/all'>Wellness</Link></li>
            <li><Link to='/all'>Tools & Accessories</Link></li>
            </ul>
        </div>
        <div className="home-banner">
            <img src={banner} alt="" />
            <div className="banner-message">
                <h2>READY.SET.SAVE</h2>
                <p>Knock 15% off your faves from Beauty Of Joseon, Made By Mitchell, OLAPLEX, and more. Code: DEALS</p>
                <Link to='/all'>Shop Now</Link>
            </div>
        </div>
        <div className="trending-trio">
          <div className="trio-card">
            <img src={trio1} alt="" />
            <div className="trio-card-info">
            <h2>NEW.EXCLUSIVE.NEED</h2>
            <p>Treat your skin to the power of cruelty-free goat milk and its skin health benefits with Beekman 1802</p>
            </div>
            <Link to='/all'>Shop Now</Link>
          </div>
          <div className="trio-card">
            <img src={trio2} alt="" />
            <div className="trio-card-info">
            <h2>NEW.EXCLUSIVE.NEED</h2>
            <p>Treat your skin to the power of cruelty-free goat milk and its skin health benefits with Beekman 1802</p>
            </div>
            <Link to='/all'>Shop Now</Link>
          </div>
          <div className="trio-card">
            <img src={trio3} alt="" />
            <div className="trio-card-info">
            <h2>NEW.EXCLUSIVE.NEED</h2>
            <p>Treat your skin to the power of cruelty-free goat milk and its skin health benefits with Beekman 1802</p>
            </div>
            <Link to='/all'>Shop Now</Link>
          </div>
        </div>
        <div className="tiles">
          <img src={tile} alt="" />
          <div className="tiles-info">
            <h2>It's never too early</h2>
            <p>Our BEAUTY BAY festive boxes are on their way. Be the first to hear when they land and join our waitlist.</p>
            <Link to='/all'>Coming Soon<AiFillCaretRight /></Link>
          </div>
        </div>
        <Brands/>
        <RecommendedProducs/>
        <div className="cta-header">
          <img src={CtaBanner} alt="" />
          <p>Looking for five-star formulas, minus the price tag? From skincare essentials to makeup must-haves and results-driven haircare, By BEAUTY BAY has everything you need to discover your next best obsession.</p>
          <Link to='/'>Shop Now</Link>
        </div>
        <div className="cta-tiles">
          <div className="cta-tile">
            <img src={trio2} alt="" />
            <h2>Hey, cream cheeks</h2>
            <p>Your flawless full beat just got easier with the By BEAUTY BAY Liquid Cream Trio</p>
            <Link to='/all'>Shop Now</Link>
          </div>
          <div className="cta-tile">
            <img src={trio3} alt="" />
            <h2>Hey, cream cheeks</h2>
            <p>Your flawless full beat just got easier with the By BEAUTY BAY Liquid Cream Trio</p>
            <Link to='/all'>Shop Now</Link>
          </div>
          <div className="cta-tile">
            <img src={trio2} alt="" />
            <h2>Hey, cream cheeks</h2>
            <p>Your flawless full beat just got easier with the By BEAUTY BAY Liquid Cream Trio</p>
            <Link to='/all'>Shop Now</Link>
          </div>
          <div className="cta-tile">
            <img src={trio3} alt="" />
            <h2>Hey, cream cheeks</h2>
            <p>Your flawless full beat just got easier with the By BEAUTY BAY Liquid Cream Trio</p>
            <Link to='/all'>Shop Now</Link>
          </div>
        </div>
        <Edited/>
    </div>
  )
}

export default Home