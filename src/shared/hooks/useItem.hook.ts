import { useEffect, useState } from "react";
import { get } from "../services/http.service";

export function useFetchData(url: string, params: any = null) {
    const [data, setdata] = useState();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const load = async () => {
        try {
            setLoading(true);
            setError(null);
            const result: any = await get(url, {params});
            setdata(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, [])

    return { data, load, loading, error };

}