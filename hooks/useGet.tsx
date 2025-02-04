"use client";

import axios from "axios";
import { useState } from "react";

function useGet() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async ({ url }: { url: string }) => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, getData };
}

export default useGet;
