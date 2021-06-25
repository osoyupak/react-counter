import { useSelector } from "react-redux"

export default function CounterDisplay() {
    const counter = useSelector(state => state.counter)
    const checkCounter = ()=> {
        if(counter<10 && counter>-1) {
            return `0${counter}`;
        } else if(counter>-10 && counter<0) {
            return `-0${Math.abs(counter)}`;
        }
        else {
            return counter;
        }
    } 
    return (
        <div>
            <h1>Counter: {checkCounter()} 

            </h1>            
        </div>
    )
}
