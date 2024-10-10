import { AiFillYoutube } from "react-icons/ai"; 
import { BsPinterest } from "react-icons/bs"; 
import { FaTiktok } from "react-icons/fa"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { BsInstagram } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../../assests/footerlogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Beauty Bay" className="logo" />
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Help & Information</h3>
            <ul>
              <li><Link to="/">Delivery & Returns</Link></li>
              <li><Link to="/">Contact Us & FAQ's</Link></li>
              <li><Link to="/">Haul Pass</Link></li>
              <li><Link to="/">Gift Cards</Link></li>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Affiliates</Link></li>
              <li><Link to="/">Student Discount</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/">Terms & Conditions</Link></li>
              <li><Link to="/">TRIBE Terms</Link></li>
              <li><Link to="/">Website Terms of Use</Link></li>
              <li><Link to="/">Privacy</Link></li>
              <li><Link to="/">Anti-Slavery</Link></li>
              <li><Link to="/">Cookies</Link></li>
              <li><Link to="/">Manage Preferences</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Want More From Beauty Bay?</h3>
            <p>Let’s stay in touch! We promise to send you the latest news, offers, and the freshest beauty drops, straight to your inbox.</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button type="submit">→</button>
            </div>
            <div className="social-icons">
              <Link to="#"><BsFacebook /></Link>
              <Link to="#"><BsInstagram /></Link>
              <Link to="#"><AiOutlineTwitter /></Link>
              <Link to="#"><FaTiktok /></Link>
              <Link to="#"><BsPinterest /></Link>
              <Link to="#"><AiFillYoutube /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 BEAUTY BAY Ltd.</p>
        <div className="payment-methods">
          <img src="https://images.ctfassets.net/eoaaqxyywn6o/6rDEb4sJOBkiIga3rkaSfA/b705c283f12f64d22365f9d168d2e9be/PayPal.svg" alt="PayPal" />
          <img src="https://images.ctfassets.net/eoaaqxyywn6o/y8QrCXyaUnAPeqGSkYBXT/dcd21c778833eed8062c9707784ea812/Klarna.svg" alt="Klarna" />
          <img src="https://images.ctfassets.net/eoaaqxyywn6o/2fVeO7f2x78KlbQuhqmuVb/a195d07a55c2bb8e1f595d5b541d4d79/Clearpay.svg" alt="Clearpay" />
          <img src="https://images.ctfassets.net/eoaaqxyywn6o/10YPF40EuGghbMiM8dvfZ4/604c660dfd975959ded92967d5acdd68/Apple.svg" alt="Apple Pay" />
          <img src="https://images.ctfassets.net/eoaaqxyywn6o/4QTzSyV3E2jIfll4u3GgIW/46acc6659798376dc8bb416454f2baba/Visa.svg" alt="Visa" />
          <img src="https://images.ctfassets.net/eoaaqxyywn6o/1R0NBLVCShxTQNVHNjanE4/c970e9e15ecbb026929000ae3fcce6ae/Amex.svg" alt="American Express" />
          <img src="https://images.ctfassets.net/eoaaqxyywn6o/5bs4r6UiioP3Fkj4Qg35o8/5583c0ecc4b6500a1083fd38cfabf6dc/Mastercard.svg" alt="MasterCard" />
          <img src="https://images.ctfassets.net/eoaaqxyywn6o/5IdXqCmgjNCVwZNyssRsdE/702c37ee931258aad2071e063bbd337e/Maestro.svg" alt="Maestro" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
