import React from 'react';
import {NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import {connect} from 'react-redux';
import { useNavigate } from "react-router-dom";

const Header = () => {
    

    const navigate = useNavigate();

    return (
    <header className='header'>
        <div className='content-container'>
        <div className="header__content">
            <NavLink to ="/dashboard"
                    className = 'header__title'>
                <h1>Expensify</h1>
            </NavLink>
        </div>
        </div>
    </header>
)};

// <button onClick={startLogout(navigate)}>Logout</button>



export default Header;