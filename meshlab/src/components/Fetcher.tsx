import React, { useState, useEffect, useSyncExternalStore } from 'react';

// glpat-VVibRbJ7pSfHKcYLnU5S   gitlab AC

function Fetcher() {
    const [data  = [
        {
        id: "id",
        username: "username",
        name: "name",
        state: "state",
        avatar_url: "avatar_url",
        web_url: "web_url"
        }
    ], setData] = useState([]);
    const getData = () => {
        fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/17628/users'
        ,{
            headers : {
                "PRIVATE-TOKEN": "glpat-VVibRbJ7pSfHKcYLnU5S",
                'Content-Type': 'application/json',
                'Accept': 'appliaction/json'
            }
        }
        )
            .then(function(response){
                //console.log(response)
                return response.json();
            })
            .then(function(myJson){
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='App'>
            {
                data && data.length > 0 && data.map((users) => <p key = {users.id}>{users.username} ({users.name})</p>)
            }
        </div>
    );
}

export { Fetcher }