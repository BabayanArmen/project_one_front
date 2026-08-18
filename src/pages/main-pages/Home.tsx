// import { useEffect, useState } from "react";
// import { DynamicTable } from "../../shared/components/DynamicTable";
// import type { TableData } from "../../shared/models/table-data.model";
import { decrement, increment, useCounterStore } from "../../zustand-store/useCounterStore";

export function Home() {
    // const [value, setValue] = useState<number>(0);

    const count = useCounterStore(state => state.count);



    // useEffect(() => {
    // }, [value]);

    // const inc = () => {
    //     // setValue(value => value + 1);
    // }

    // const tableData: TableData = {
    //     url: "https://jsonplaceholder.typicode.com/posts?", // _start=0&_limit=5
    //     headers: ['id', 'userId', 'title', 'body']
    // }

    return (
        <>
            <div>Home page</div>

            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>

            {/* <span>{value}</span> */}
            
            <span>{count}</span>

            {/* <span>{counter.current}</span> */}

            {/* <DynamicTable {...tableData}/> */}
        </>
    )
}