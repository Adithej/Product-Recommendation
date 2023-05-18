import React, { useState, useCallback } from "react";
import "/Users/mozilor/Desktop/assignment/shopify-app/product-recommondation/web/frontend/components/CustomCard.css"
import { useNavigate } from 'react-router-dom';

const Card = () => {

  const handleClick = () => {
    useNavigate("/ProductPage");
  };

  return (
    <div
      className={"card"}
      onClick={handleClick}
    >
      <div className="card-contents">
        <h2 className="card-head">Product Page</h2>
        <p className="card-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        adipisci. Dignissimos aliquam sed ullam minus, dolorum voluptatem
        nostrum. Libero corrupti aliquam officia atque delectus doloremque
        adipisci dignissimos quos quisquam ad.
        </p>
      </div>
    </div>
  );
};

export default Card;
