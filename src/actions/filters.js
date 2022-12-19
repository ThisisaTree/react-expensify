
// SET_TEXT filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

// SORT_BY_AMOUNT filter
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// SORT_BY_DATE filter
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

// SET_START_DATE filter
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate: startDate
});

// SET_END_DATE filter
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate: endDate
});