import {createStore, combineReducers} from 'redux';
import {v1 as uuid} from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = "",
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = (
    {
        id
    } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id != action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                };
            });
        default:
            return state;
    }
};


// SET_TEXT filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
})

// SORT_BY_AMOUNT filter
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// SORT_BY_DATE filter
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SET_START_DATE filter
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate: startDate
})

// SET_END_DATE filter
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate: endDate
})

// Filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {...state,
                    text: action.text};
        case 'SORT_BY_AMOUNT':
            return {...state,
                sortBy: "amount"};
        case 'SORT_BY_DATE':
            return {...state,
                sortBy: "date"};
        case 'SET_START_DATE':
            return {...state,
                startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state,
                endDate: action.endDate};
        default:
            return state;
    }
}

// Visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
const expTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 700}));

// store.dispatch(removeExpense({id: expOne.expense.id}));
// store.dispatch(editExpense(expTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1200));
// store.dispatch(setEndDate(2000));