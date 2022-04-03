import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../ActiveLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>welcome to my shop</h1>
            <nav>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
                <CustomLink to='/grandpa'>Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;