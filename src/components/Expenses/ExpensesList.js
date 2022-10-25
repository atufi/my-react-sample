import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props ) => {
    if (props.items.length === 0 ) {
    return <h2 className="list__fallback"> No Items Found</h2>;
}
    return (
        <ul className="expenses-list">
        {props.items.map ( (item , index) => <ExpenseItem key={index} title={item.title}   amount={item.amount}  date={item.date} /> ) }
        </ul>
    );
}

export default ExpensesList;