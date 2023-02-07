import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const clickHandler= () => {console.log('see')};
    return (
        <Card className='expense-item' >
            <ExpenseDate date={props.expense.date}></ExpenseDate>

            <div className='expense-item__description h2'>
                <h2> {props.expense.title}</h2>
                <div className='expense-item__price'> 
                {props.expense.amount} </div>
                </div>
            <button onClick={clickHandler}> change Title</button>
        </Card>
    );

}

export default ExpenseItem


