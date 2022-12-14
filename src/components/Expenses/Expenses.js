import React ,{useState} from 'react';

import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
  const [selectdYear,setSelectedYear] = useState('2021');
  const changeSelectedYearHandler =  (newSelectedYear) =>{
    setSelectedYear(newSelectedYear);
    //console.log(newSelectedYear);
  }
  const filteredItems= props.items.filter ( (item) => item.date.getFullYear().toString() ===selectdYear )
  return (
    
    <li >
      <Card className="expenses">
      <ExpensesFilter selected={selectdYear}  onChangeSelectedYearHandler={changeSelectedYearHandler} />
      <ExpenseChart items={filteredItems} />
      <ExpensesList items={filteredItems} />
      
       </Card>
    </li>
  );
}

export default Expenses;
