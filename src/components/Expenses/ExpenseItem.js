import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../../UI/Card'

const ExpenseItem = (props)  =>{

  const[title, setTitle] = useState(props.title);
  const[amount,setNewamount] = useState(props.amount);
  console.log("multiple times changed");

  const ClickHandler =() =>{
    setTitle("Updated");
    setNewamount(props.amount+1);
    console.log(amount)
console.log(title);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
  }
export default ExpenseItem;