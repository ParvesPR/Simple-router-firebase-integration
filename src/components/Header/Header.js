import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user } = useFirebase()
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
            {user.uid ?
                <button>Sign Out</button> :
                <Link to="/login">Login</Link>
            }
        </nav>
    );
};

export default Header;