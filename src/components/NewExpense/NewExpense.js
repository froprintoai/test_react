import React ,{ useState } from 'react';

import ExpenseForm from './ExppenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [startAddExpense, setStartAddExpense] = useState(0);

    const SaveExpenseDataHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(data);
    };

    const cancelClickedHandler = () => {
        setStartAddExpense(0);
    }

    let AddExpenseComponent = <button onClick={() => {setStartAddExpense(1);}}>Add New Expense</button>;

    if (startAddExpense !== 0) {
        AddExpenseComponent = <ExpenseForm 
            onSaveExpenseData={SaveExpenseDataHandler}
            cancelClicked={cancelClickedHandler}
        />
    }

    return (
        <div className="new-expense">
            {AddExpenseComponent}
        </div>
    );
}

export default NewExpense;