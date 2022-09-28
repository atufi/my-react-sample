import { useState } from 'react';
import './ExpenseForm.css'
export default function ExpenseForm (props) {
    const initUserInputs={
        title:'',
        amount:'0',
        date:''
    };
    const [userInputs,setUserInputs] = useState(initUserInputs);
    const changeHandler= (e)=> {
        const inputName=e.target.name;
        const inputValue=e.target.value;
        setUserInputs ( (p) => {
            return {...p , [inputName]:inputValue}
        } )
    }
    const formSubmitHandler= (e) => {
        e.preventDefault();        
        //console.log (userInputs);
        props.onSaveDataHandler(userInputs);
        setUserInputs(initUserInputs);

    }
return (
    <form onSubmit={formSubmitHandler}>
        <div className='new-expense__controls' >
            <div className='new-expense__control' >
                <label>Title</label>
                <input name ='title'  type='text' onChange={changeHandler} value={userInputs.title} />
            </div>
            <div className='new-expense__control' >
                <label>Amount</label>
                <input type='number' name='amount' onChange={changeHandler} value={userInputs.amount}  />
            </div>
            <div className='new-expense__control' >
                <label>Date</label>
                <input type='date' name='date' onChange={changeHandler}  value={userInputs.date}  />
            </div>
            <div className='new-expense__actions' >
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
);
}