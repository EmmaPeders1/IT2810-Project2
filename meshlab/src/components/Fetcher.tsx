import React, { useState, useEffect } from 'react';

// glpat-VVibRbJ7pSfHKcYLnU5S   gitlab AC
let information = <p>Welcome to meshLab, where you can find all the information!</p>

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
            .then((data: string) => console.log(data));
    }, []);
    information = <p>UGH</p>
}

const Fetcher = () => {
    FetchProjectData();
    return (information)
}

export { Fetcher }