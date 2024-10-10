
import { BsSearch } from "react-icons/bs"; 
import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Logo from '../../assests/logo.svg'
import Edited from '../../assests/Edited.svg'
import Tribe from '../../assests/Tribe.svg'
import Truck from '../../assests/truck.svg'
import Accounticon from '../../assests/account.svg'
import Like from '../../assests/Like.svg'
import Shopping from '../../assests/shoppingbag.svg'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../redux/slice/currencySlice";
import { RootState } from "../../types";


const Header : React.FC = () => {

  const likedProducts = useSelector((state: any) => state.like.likedProducts);
  const cartProducts = useSelector((state: any) => state.cart.Products);
  const [search , setSearch] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const currency = useSelector((state: RootState) => state.currency.selected); // Hozirgi valyutani olish

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newCurrency = event.target.value;
      dispatch(setCurrency(newCurrency));
  };


  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      
      navigate(`/all?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-top">
        <Link to="/"><span>Save 15% on selected items with code: DEALS</span></Link>
      </div>
      <div className='nav-middle'>
        <Link to="/"><span>Head to the app for a FREE gift from Made by Mitchell worth £16, plus exclusive discounts! | FREE delivery over £25 OR spend £60 for FREE next day delivery</span></Link>
        <div>
            <select id="currency-select" value={currency} onChange={handleCurrencyChange}>
                <option value="USD">USD</option>
                <option value="UZS">UZS</option>
            </select>
        </div>
      </div>
      <nav>
        <Link to="/"><img src={Logo} alt="logo"/></Link>
        <div className="search-bar">
      <span className="search-icon">
        <BsSearch />
      </span>
      <form  onSubmit={handleSearchSubmit}>
      <input
        type="search"
        className="search-input"
        placeholder="Search products only"
        onChange={(e) => setSearch(e.target.value)}
      />
      </form>
        </div>
        <div className="nav-links">
          <Link target="_blank" to='https://www.beautybay.com/edited/'><img src={Edited} alt="" /></Link>
          <Link to='/'><img src={Tribe} alt="" /></Link>
          <Link to='/'><img src={Truck} alt="" /></Link>
          <Link to='/'><img src={Accounticon} alt="" /></Link>
          <div className="header-like-btn"><Link to='/liked'><img src={Like} alt="" /></Link>
          {
            likedProducts.length > 0 && <span>{likedProducts.length}</span>
          }
          </div>
          <div className="header-cart-btn">
          <Link to='/cart'><img src={Shopping} alt="" /></Link>
          {
            cartProducts.length > 0 && <span>{cartProducts.length}</span>
          }
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default Header