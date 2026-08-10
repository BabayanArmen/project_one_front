import { Outlet } from "react-router-dom";
// import { useCounterStore } from "../zustand-store/useCounterStore";

export function AuthLayout() {
    // const count = useCounterStore(state => state.count);

    return (
        <>
            {/* <span>Count: {count}</span> */}
            <Outlet/>
        </>
    )
}