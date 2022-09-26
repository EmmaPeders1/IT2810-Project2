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

    const [data, setData] = useState<UData[]>([]);
    const getData = () => {
        fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/17628/members'
        //'https://gitlab.stud.idi.ntnu.no/api/v4/projects/17628/members/all/{id} to get one of the members'
            , {
                headers: {
                    "PRIVATE-TOKEN": "glpat-Fy8Cs4SqsPRrBa6MirZy", // our projects access token
                    'Content-Type': 'application/json',
                    'Accept': 'appliaction/json'
                }
            }
        )
            .then(function (response) {
                return response.json() as unknown as UData[];
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <ul>
                {data && data.length > 0 && data.map((users) => <li key={users.id}>{users.username} ({users.name})</li>)}
            </ul>
        </div>
    );
}

export { UserFetcher }