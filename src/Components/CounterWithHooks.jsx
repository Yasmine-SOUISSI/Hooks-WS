import React, { useEffect, useState } from "react";

export default function CounterWithHooks() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [timer]);

    return (
        <div>
            <p>CounterWithHooks</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>{count}</p>
            <button onClick={() => count > 0 && setCount(count - 1)}>
                Decrement
            </button>
            <p>Counter {timer}</p>
        </div>
    );
}
