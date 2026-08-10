import { useCounterStore } from "../../zustand-store/useCounterStore";

export function Login() {
    const { increment, decrement, reset } = useCounterStore(state => state.actions);

    return (
        <>
            <button onClick={inc}>Inc from outsiede</button>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <span>Login</span>
        </>
    )
}

function inc() {
    useCounterStore.setState(state => ({count: state.count + 1}));
}