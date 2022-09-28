import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
export default function NewExpense(props) {
    const saveDataHandler = (newExpense) => {
        props.addNewExpense ( {...newExpense, id:Math.random().toString() });
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveDataHandler={saveDataHandler}/>
        </div>
    )    ;
}