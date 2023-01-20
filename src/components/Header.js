import React from 'react';
import {NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import {connect} from 'react-redux';
import { useNavigate } from "react-router-dom";

const Header = () => {
    

    const navigate = useNavigate();

    return (
    <header>
        <h1>Expensify</h1>
        <NavLink to ="/dashboard"
                 className = {({isActive}) => isActive ? 'is-active' : undefined}>
            Dashboard
        </NavLink>
        <NavLink to ="/create"
                 className = {({isActive}) => isActive ? 'is-active' : undefined}>
            Create Expense
        </NavLink>
        <NavLink to ="/help"
                 className = {({isActive}) => isActive ? 'is-active' : undefined}>
            Help
        </NavLink>
    </header>
)};

// <button onClick={startLogout(navigate)}>Logout</button>



export default Header;