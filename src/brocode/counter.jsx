import React, {useState} from "react";
import './counter.css'



function Counter(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }

    function decrement(){
        setCounter(counter - 1);
    }

    function reset(){
        setCounter(0);
    }

    return(
        <div>
            <p className="counter">Count: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter;