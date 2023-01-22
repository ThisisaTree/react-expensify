import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from "../actions/expenses";

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
        <div className="page-header">
            <div className="content-container">
                <h1>Edit Expense</h1>
            </div>
        </div>
        <div className='content-container'>
        <ExpenseForm
            expense={expense}
            onSubmit={(expense) => {
                props.dispatch(startEditExpense(id, expense));
                console.log('updated');
                navigate('/');
            }}
        />
        <button 
        className='button__remove'
        onClick={
            (e) => {
                props.dispatch(startRemoveExpense({id}))
                console.log(id);
                navigate('/');

            }
        }>Remove</button>
        </div>
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
        }
    };

export default connect(mapStateToProps)(EditExpensePage);