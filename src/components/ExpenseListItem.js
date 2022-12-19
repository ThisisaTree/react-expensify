import React from "react";
import {NavLink } from 'react-router-dom';


const ExpenseListItem = ({id, dispatch, description, amount, createdAt}) => {

    return (
        <div>
        <NavLink to ={`/edit/${id}`}>
            <h3>{description}</h3>
        </NavLink>
        <p>Amount: {amount} - {createdAt}</p>
    </div>
)};

export default ExpenseListItem;
// export default ExpenseListItem;