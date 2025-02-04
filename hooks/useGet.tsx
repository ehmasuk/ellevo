"use client";

import axios from "axios";
import { useState } from "react";

function useGet() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getData = async ({ url }: { url: string }) => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, getData };
}

export default useGet;
