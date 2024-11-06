// src/pages/Home.js
import React from 'react';
import ProductCard from '../components/ProductCard'; // Displays individual products
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to Ketki Stores</h2>
            <div className="banner"> {/* Display promotional banner here */}</div>
            <h3>Featured Products</h3>
            <div className="product-grid">
                {/* Map through featured products and render ProductCard for each */}
                {[1, 2, 3, 4].map((id) => (
                    <ProductCard key={id} id={id} />
                ))}
            </div>
        </div>
    );
};

export default Home;
