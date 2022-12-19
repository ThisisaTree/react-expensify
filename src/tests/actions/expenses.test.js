import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import {v1 as uuid} from 'uuid';

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

test('should setup add expense action obj', () => {
    const expenseData = {
        description : "A",
        note : 'my note',
        amount : 1000,
        createdAt : 100
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});