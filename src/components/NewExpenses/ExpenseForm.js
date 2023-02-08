import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    //const [enteredAmount, setEnteredAmount]=useState();
    //const [enteredDate, setEnteredDate]=useState();

    const[userInput, setUserInput]=useState(
       { enteredTitle : '',
     enteredAmount :'',
    enteredDate : ''
    }
    )



    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        }
        )
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            };
        })
    };
    const dateChangeHandler = (event) => {
        setUserInput(
            (prevState) => { return { ...prevState, enteredDate: event.target.value }; }
        );
    }

    let expenseData ={title: '' , amount : '', date: ''};
    const onSubmitHandler = (event) => {
     event.preventDefault(); // prevents submitting of folder to the backend
     expenseData = {...userInput};
     
    console.log(expenseData);
    
    props.onSaveExpenseData(expenseData);
  setUserInput({
    enteredAmount: '',
    enteredDate:'',
    enteredTitle: ''
  })
}


        
    return (

        <form  onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={userInput.enteredDate} min='2019-1-1' max='2022-12-30' onChange={dateChangeHandler} />
                   
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'> Add the Expense</button>
                </div>
                
            </div>

        </form>


    )
}


export default ExpenseForm