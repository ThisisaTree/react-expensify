import { selectExpensesTotal } from "../../selectors/expenses-total";


const expenses = [
    {description: 'Gas fee', amount: 100, createdAt: 1000},
    {description: 'Coffee', amount: 300, createdAt: 700},
    {description: 'Rent', amount: 1000, createdAt: 500},
    {description: 'Water bill', amount: 100, createdAt: 500}
]


test('should return 0 for empty', () => {
    const totalTest = selectExpensesTotal([]);
    expect(totalTest).toEqual(0);
});

test('should return 100 for single', () => {
    const totalTest = selectExpensesTotal([expenses[0]]);
    expect(totalTest).toEqual(100);
});

test('should return for all', () => {
    const totalTest = selectExpensesTotal(expenses);
    expect(totalTest).toEqual(1500);
});