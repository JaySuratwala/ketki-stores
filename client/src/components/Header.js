// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import LanguageSwitcher from './LanguageSwitcher';
import CartIcon from './CartIcon';
import './Header.css';

const Header = () => (
    <header className="header">
        <div className="logo">
            <Link to="/">Ketki Stores</Link>
        </div>
        <SearchBar />
        <LanguageSwitcher />
        <nav>
            <Link to="/products">Products</Link>
            <Link to="/orders">Orders</Link>
            <CartIcon />
        </nav>
    </header>
);

export default Header;
