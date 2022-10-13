import React ,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [selectdYear,setSelectedYear] = useState('2021');
  const changeSelectedYearHandler =  (newSelectedYear) =>{
    setSelectedYear(newSelectedYear);
    //console.log(newSelectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectdYear}  onChangeSelectedYearHandler={changeSelectedYearHandler} />
      <div class="card-flex">
      {props.items.map ( (item , index) => <ExpenseItem key={index} title={item.title}   amount={item.amount}  date={item.date} /> ) }
    </div>
    </Card>
    
  );
}

export default Expenses;
