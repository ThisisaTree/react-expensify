import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ref, onValue } from "firebase/database";

import { addExpense, startAddExpense, editExpense, removeExpense } from "../../actions/expenses";
import {v1 as uuid} from 'uuid';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';

test('should setup remove expense action obj', () => {
    const action = removeExpense({id: '123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test('should setup edit expense action obj', () => {
    const action = editExpense('123', {amount: 123});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {amount: 123}
    });
});

/*
test('should setup add expense default action obj', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description : "",
            note : '',
            amount : 0,
            createdAt : 0
        }
    });
});
*/

test('should setup add expense action obj', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[2],
            id: expect.any(String)
        }
    });
});


const createMockStore = configureMockStore([thunk]);

test('should add expense to db and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Dogfood',
        amount: 3000,
        note: 'Fincsis',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {id: expect.any(String),
            ...expenseData}
        });

        onValue(ref(db, `expenses/${actions[0].expense.id}`), (snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
        });


        done();
    });
});


test('should add expense with defaults to db and store', (done) => {
    
    const store = createMockStore({});
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {id: expect.any(String),
            ...expenseData}
        });

        onValue(ref(db, `expenses/${actions[0].expense.id}`), (snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
        });


        done();
    });
});