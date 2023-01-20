import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { onAuthStateChanged } from 'firebase/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {auth} from './firebase/firebase';

// ReactDOM.render(<User name={"Mate"} age={12}/>, document.getElementById('app'));

const store = configureStore();

/*
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    // console.log(visibleExpenses);
})*/

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    );

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});
auth.onAuthStateChanged((user) => {


    console.log(user);
    if(user){
        console.log('log in');
    }else{
        console.log('log out');
    }
});