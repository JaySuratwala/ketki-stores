// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ id, title = "Product Title", price = 100 }) => {
    return (
        <div className="product-card">
            <img src={`https://via.placeholder.com/150?text=Product+${id}`} alt={title} />
            <h4>{title}</h4>
            <p>Price: ₹{price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
