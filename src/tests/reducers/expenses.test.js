import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test('should setup default expense values', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should remove expense by invalid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: "4"
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add new expense', () => {
    const new_expense = {
        id: "3",
        description: 'Burger',
        note: '',
        amount: 3000,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: new_expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, new_expense]);
});


test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {note: 'new note'}
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toEqual('new note');
});

test('should not edit expense with wrong id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '10',
        updates: {note: 'new note'}
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});