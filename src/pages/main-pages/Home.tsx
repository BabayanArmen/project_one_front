import { useEffect, useState } from "react";

export function Home() {
    const [value, setValue] = useState<number>(0);



    useEffect(() => {
    }, [value]);

    const inc = () => {
        setValue(value => value + 1);
    }

    return (
        <>
            <div>Home page</div>

            <button onClick={inc}>inc</button>

            <span>{value}</span>

            {/* <span>{counter.current}</span> */}
        </>
    )
}