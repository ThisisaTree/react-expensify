import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import './firebase/firebase';

// ReactDOM.render(<User name={"Mate"} age={12}/>, document.getElementById('app'));

const store = configureStore();

/*
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    // console.log(visibleExpenses);
})

const expOne = store.dispatch(addExpense({description: 'Gas fee', amount: 100, createdAt: 1000}));
const expTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 700}));
const expThree = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: 500}));
const expFour = store.dispatch(addExpense({description: 'Water bill', amount: 100, createdAt: 500}));
*/

// store.dispatch(removeExpense({id: expOne.expense.id}));
// store.dispatch(editExpense(expTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(2000));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    );

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {


    ReactDOM.render(jsx, document.getElementById('app'));
});
