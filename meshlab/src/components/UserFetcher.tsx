import React, { useState, useEffect } from 'react';

// glpat-VVibRbJ7pSfHKcYLnU5S   gitlab AC OLD NOT WORKING
// glpat-Fy8Cs4SqsPRrBa6MirZy new one with role = developer

type UData = {
    id: number,
    username: string,
    name: string,
    state: string,
    avatar_url: string,
    web_url: string
}

function UserFetcher() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState<UData[]>([]);
    useEffect(() => {

        fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/17628/members/all'
            //'https://gitlab.stud.idi.ntnu.no/api/v4/projects/17628/members/all/{id} to get one of the members'
            , {
                headers: {
                    "PRIVATE-TOKEN": "glpat-Fy8Cs4SqsPRrBa6MirZy", // our projects access token
                    'Content-Type': 'application/json',
                    'Accept': 'appliaction/json'
                }
            }
        )
            .then(function (res): Response {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res
            })
            .then(res => res.json())
            .then(
                (result: Promise<any>) => {
                    setIsLoaded(true);
                    const response = result as unknown as UData[];
                    setData(response);
                }
            )
            .catch(
                (err) => {
                    setIsLoaded(true);
                    console.log(err);
                    setError(err);
                }
            )

    }, [])

    //return JSX: if there was an error: tell the user, otherwise return the data
    if (error) {
        return <p> Something went wrong with fetching the data. Are you sure there are no spelling mistakes in your url, and you have the correct accesses? (make sure you're using the correct access token)</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>

    } else {
        return <div>
            <p>Users:</p>
            {
                <ul>
                    {data && data.length > 0 && data.map((users) => <li key={users.id}>{users.username} ({users.name})</li>)}
                </ul>
            }
        </div >
    }

}

export { UserFetcher }