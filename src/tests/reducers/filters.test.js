import filtersReducer from "../../reducers/filters";
import moment from 'moment';


test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});

test('should set sortby to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test('should set sortby to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toEqual('date');
});

test('should set text filter', () => {
    const text = "alma";
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT',
        text: text
    });
    expect(state.text).toEqual(text);
});

test('should set startDate filter', () => {
    const time = moment().startOf('month');
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: time
    });
    expect(state.startDate).toEqual(time);
});

test('should set endDate filter', () => {
    const time = moment().startOf('month');
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: time
    });
    expect(state.endDate).toEqual(time);
});