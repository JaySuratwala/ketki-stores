// src/pages/ProductList.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

const ProductList = () => (
    <div className="product-list">
        <FilterSidebar />
        <section className="product-grid">
            <ProductCard productName="Product A" price="₹500" />
            <ProductCard productName="Product B" price="₹700" />
            {/* Product grid items */}
        </section>
    </div>
);

export default ProductList;
