import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import type { TableData } from '../models/table-data.model';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { get, post } from '../services/http.service';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function DynamicTable(tableData: TableData) {
    const [rows, setRows] = useState<any>(null);

    const [search, setSearch] = useState<{id: string | null, title: string | null}>({
        id: null,
        title: null
    });

    const [submitFilters, setSubmitFilters] = useState<any>(null);

    const { data, isLoading } = useQuery({
        queryKey: ["posts", submitFilters],
        queryFn: () => get(tableData.url, {...submitFilters}),
        // enabled: false // disables automatic fetch
        // gcTime: 0 // to disable cache
        // staleTime: Infinity // to disable background data fatching
    })
    
    ///// mutation example /////
    // const queryClient = useQueryClient();
    // const { mutateAsync: addItem } = useMutation({
    //     mutationFn: (body: any) => post('url', body),
    //     onSuccess: () => {
    //         // refetch();
    //         queryClient.invalidateQueries({
    //             queryKey: ["posts"]
    //         })
    //     },
    //     onError: () => {}
    // })

    // const onAddItem = async () => {
    //     await addItem({title: "Hello"});
    // }
    ////////////////////////////

    useEffect(() => {
        setRows(data);
    }, [data])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isLoading && !rows) {
        return <div>No Data</div>;
    }

    const handleSeaarch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearch({
            ...search,
            [name]: value.trim() != "" ? value.trim() : null
        })
    }

    return (
        <>
            <TextField id="outlined-basic" size="small" label="title" variant="outlined" value={search?.title ?? ''} name='title' placeholder='title' onChange={handleSeaarch} />
            <TextField id="outlined-basic" size="small" label="id" variant="outlined" value={search?.id ?? ''} name='id' placeholder='id' onChange={handleSeaarch} />
            <Button variant="contained" size="small" onClick={() => setSubmitFilters(search)}>Search</Button>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {tableData.headers.map((header: string, index: number) => (
                        <TableCell key={index}>{header}</TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any, index: number) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {tableData.headers.map((header: string, index: number) => (
                            <TableCell key={index} component="th" scope="row">{row[header]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}