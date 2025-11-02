import "./ProductCard.css";
import React from "react";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const imgSrc = product.image || "/assets/placeholder.png";
  const title = product.title || "Product Name";

  return (
    <article className="product-card">
      <div className="media">
          <img src={imgSrc} alt={title} loading="lazy" />
      </div>
      <div className="meta">
        <h2 itemProp="name">{title}</h2>
        <div className="sign-in-container">
          <p
            className="sign-in-para"
            itemProp="offers"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <span className="sign-in-text">Sign in</span> or Create an account
            to see pricing
          </p>
          {liked ? (
            <button className="heart-button" onClick={() => setLiked(false)}>
              <FaHeart size="30px" className="red-heart-icon" />
            </button>
          ) : (
            <button className="heart-button" onClick={() => setLiked(true)}>
              <CiHeart size="30px" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
