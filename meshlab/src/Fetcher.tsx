import React, { useState, useEffect } from 'react';

// glpat-VVibRbJ7pSfHKcYLnU5S   gitlab AC

export function FetchProjectData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/17628/users/', {
            headers: {
                "PRIVATE-TOKEN": "glpat-VVibRbJ7pSfHKcYLnU5S",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);


}


const Fetcher = () => {
    FetchProjectData();
    return <h1>YOOOO!</h1>
}

export { Fetcher }