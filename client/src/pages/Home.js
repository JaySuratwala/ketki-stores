// src/pages/Home.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => (
    <main>
        <h1>Welcome to Ketki Stores</h1>
        <section className="featured-products">
            <ProductCard productName="Product A" price="₹500" />
            <ProductCard productName="Product B" price="₹700" />
            {/* Add more featured products */}
        </section>
    </main>
);

export default Home;