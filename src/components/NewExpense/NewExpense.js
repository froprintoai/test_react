import React from 'react';

import ExpenseForm from './ExppenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const SaveExpenseDataHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(data);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;