import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_LOCATIONS } from '../GraphQL/Queries'

function GetLocations() {

    const { error, loading, data } = useQuery(LOAD_LOCATIONS)
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        if (data) {
            setLocations(data.getAllLocations)
        }
    }, [data]);

    return (
        <div>
            {" "}
            {locations.map((val) => {
                return <h1>{val.city_name}</h1>
            })}
        </div>
    );
}

export default GetLocations