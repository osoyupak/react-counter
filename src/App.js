import Controllers from "./components/Controllers";
import CounterDisplay from "./components/CounterDisplay";

export default function App() {
    return (
        <div className="container text-center mt-3" style={{maxWidth:"500px"}}>
            <CounterDisplay />
            <Controllers /> 
        </div>
    )
}
