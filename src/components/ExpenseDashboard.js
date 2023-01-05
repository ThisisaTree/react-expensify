import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';


const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
        <h1>Mi van Marci, semmi?</h1>
    </div>
);

export default ExpenseDashboardPage;