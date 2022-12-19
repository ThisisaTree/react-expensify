import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";
import moment from 'moment';


test('should generate set start date action obj', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
});
});

test('should generate set start date action obj', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter action obj', () => {
    const text = "alma"
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: text
    });
});

test('should generate set text filter with default argument action obj', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ""
    });
});

test('should generate sort by date filter action obj', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test('should generate sort by amount filter action obj', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});