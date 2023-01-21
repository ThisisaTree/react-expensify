import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getVisibleExpenses from "../selectors/expenses";
import { selectExpensesTotal } from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = (props) => {

    const expCount = props.count;
    const expWord = expCount === 1 ? 'expense' : 'expenses';
    const total = numeral(props.total).format('$0,0.00')

    return(
    <div className="page-header">
    <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expCount}</span> {expWord} totalling <span>{total}</span></h1>
        <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
        </div>
        </div>
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