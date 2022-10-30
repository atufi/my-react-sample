import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
    let maxValue=0;
    let itemValues= props.items.map( item => item.value);
    maxValue=Math.max(...itemValues);

    return (
        <div className='chart' >
            {props.items.map ( (item) => <ChartBar  key={item.label} value={item.value} maxValue={maxValue} label={item.label} /> )}
            
        </div>
     );
}

export default Chart;