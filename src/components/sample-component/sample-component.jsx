import React from 'react';

function getUsers() {
    fetch(`/api/users`)
    .then((response) => response.json())
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