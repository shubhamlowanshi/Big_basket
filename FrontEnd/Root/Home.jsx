import React from 'react';
import './Homes.css'; 

import { FaShoppingCart } from 'react-icons/fa'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div> 
      <div className="content">
        <h1>
          <FaShoppingCart className="icon" /> Big Basket
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam architecto corporis culpa cum, dignissimos dolorem eaque eligendi id incidunt maxime odit praesentium qui repellat sapiente sed tempora veritatis voluptate?
        </p>
      </div>
    </div>
  );
};

export default Home;
