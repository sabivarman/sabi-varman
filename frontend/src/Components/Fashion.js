import React from 'react';
import { Link } from 'react-router-dom';


const Fashion = () => {
  return (
    <div className="categories-page">
      <h2>Our Product Categories</h2>
      <div className="categories-list">
        <Link to="/T-SHIRTS" className="category-item">
          <img src="https://via.placeholder.com/150" alt="T-SHIRT" />
          <h3>T-SHIRT</h3>
        </Link>

        <Link to="HATS" className="category-item">
          <img src="https://via.placeholder.com/150" alt="HATS" />
          <h3>HATS</h3>
        </Link>

        <Link to="SHOES" className="category-item">
          <img src="" alt="SHOES" />
          <h3>SHOES</h3>
        </Link>

        <Link to="OVER SIZED SHIRT" className="category-item">
          <img src="https://via.placeholder.com/150" alt="OVER SIZED SHIRT" />
          <h3>OVER SIZED SHIRT</h3>
        </Link>

        <Link to="OVER SIZED T-SHIRT" className="category-item">
          <img src="https://via.placeholder.com/150" alt="OVER SIZED T-SHIRT" />
          <h3>OVER SIZED T-SHIRT</h3>
        </Link>

        
      </div>
    </div>
  );
};

export default Fashion;
