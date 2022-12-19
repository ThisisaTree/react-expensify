import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    let {id} = useParams();
    const navigate = useNavigate();

    // console.log(location);
    // console.log(id);

    const expense = props.expenses.find((expense) => {
        return expense.id === id;
    })

    return (
    <div>
        <ExpenseForm
            expense={expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(id, expense));
                console.log('updated');
                navigate('/');
            }}
        />
        <button onClick={
            (e) => {
                props.dispatch(removeExpense({id}))
                console.log(id);
                navigate('/');

            }
        }>Remove</button>
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
        }
    };

export default connect(mapStateToProps)(EditExpensePage);