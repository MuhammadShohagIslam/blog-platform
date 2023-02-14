import { useEffect, useState } from "react";

const useFetch = (url, id = null) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchCourses = async () => {
            try {
                let response;
                if (id) {
                    response = await fetch(`${url}/${id}`);
                } else {
                    response = await fetch(url);
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchCourses();
    }, [id, url]);

    return {
        data,
        loading,
    };
};

export default useFetch;
