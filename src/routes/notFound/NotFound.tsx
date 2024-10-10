import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist or an error occurred.</p>
      <Link to="/" className="home-button">Go to Home</Link>
    </div>
  );
}

export default NotFound;
