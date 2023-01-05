import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from "../selectors/expenses";
import { selectExpensesTotal } from '../selectors/expenses-total';


const ExpensesSummary = (props) => {

    return(
    <div>
        <h1>Summary</h1>
        <p>Viewing {props.count} expense{props.count > 1 && "s"} totalling ${props.total}</p>
    </div>
)};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        count:  visibleExpenses.length,
        total: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);