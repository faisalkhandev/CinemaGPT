import { useState, useEffect } from "react";
import { options } from "../utils/constant";

export const useGetData = (api) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getMoviesList() {
        try {
            const response = await fetch(api, options);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getMoviesList();
    }, [api]);

    return { data, loading, error };
}
