import React from "react";
import {NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({id, dispatch, description, amount, createdAt}) => {

    return (
        <div>
        <NavLink to ={`/edit/${id}`}>
            <h3>{description}</h3>
        </NavLink>
        <p>Amount:
        {numeral(amount).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
)};

export default ExpenseListItem;
// export default ExpenseListItem;