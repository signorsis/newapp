import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
    
    const [filteredYear, setFilteredYear]=useState('2020');
    
   const filterChangeHandler = (selectedYear) => {

    setFilteredYear ( selectedYear );
   }


    

    return (

        <Card className="expenses">
                 <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseItem expense={props.items[0]}>  </ExpenseItem>
            <ExpenseItem expense={props.items[1]}></ExpenseItem>
            <ExpenseItem expense={props.items[2]}></ExpenseItem>
            <ExpenseItem expense={props.items[3]}></ExpenseItem>
        </Card>

    );

}

export default Expenses