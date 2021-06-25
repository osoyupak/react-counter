import { useDispatch } from "react-redux"

export default function Controllers() {
    const dispatch = useDispatch();

    const increaseOne = () => {
        dispatch({type:"increment", payload: 1})
    }

    const decreaseOne = () => {
        dispatch({type:"decrement", payload: 1})
    }

    const reset = () => {
        dispatch({type:"reset"})
    }

    return (
        <div className="row mt-4">
            <div className="col-4 d-grid gap-2">
                <button onClick={increaseOne} className="btn btn-secondary">+1</button>
            </div>
            <div className="col-4 d-grid gap-2">
                <button onClick={decreaseOne} className="btn btn-secondary">-1</button>
            </div>
            <div className="col-4 d-grid gap-2">
                <button onClick={reset} className="btn btn-secondary">Reset</button>
            </div>
        </div>
    )
}
