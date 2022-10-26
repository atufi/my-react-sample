import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
export default function NewExpense(props) {
    const [isEditing,setIsEditing]=useState(false);
    const saveDataHandler = (newExpense) => {
        props.addNewExpense ( {...newExpense, id:Math.random().toString(),date: new Date(newExpense.date) });
    }
    const isEditingHandler= () => {
        setIsEditing(true);
    }
const cancelIsEditingHandler = () => {
    setIsEditing(false);
}
    return (
        <div className='new-expense'>
            {!isEditing &&  <button onClick={isEditingHandler}>Add New Item</button>}
            {isEditing && <ExpenseForm onSaveDataHandler={saveDataHandler} onCancelIsEditingHandler={cancelIsEditingHandler} />}
        </div>
    )    ;
}