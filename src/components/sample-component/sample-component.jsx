import React from 'react';

function getUsers() {
    console.log("attempt getUsers");
    fetch(`/api/customers`)
        .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then(res => console.log(res));
}

export function SampleComponent() {
    return (
        <div>
        This is a sample component
        {getUsers()}
        </div>
    );
}