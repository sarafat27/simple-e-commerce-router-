import React from 'react';
import auth from '../../firebase.init';
import CustomLink from '../ActiveLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>welcome to my shop</h1>
            <nav>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>
                <CustomLink to='/signup'>signup</CustomLink>
                <CustomLink to='/grandpa'>Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;