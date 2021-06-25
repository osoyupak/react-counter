import { useSelector } from "react-redux"

export default function CounterDisplay() {
    const counter = useSelector(state => state.counter)
    return (
        <div>
            <h1>Counter: {counter<10? `0${counter}`:counter}</h1>            
        </div>
    )
}
