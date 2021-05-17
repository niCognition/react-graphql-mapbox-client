import React, { useState } from 'react'
import { CREATE_LOCATION_MUTATION } from '../GraphQL/Mutations'
import { useMutation } from '@apollo/client'

function Form() {
    const [city_name, setCityName] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");

    const [createLocation, { error }] = useMutation(CREATE_LOCATION_MUTATION);

    const addLocation = () => {
        createLocation({
            variables: {
                city_name: city_name,
                longitude: longitude,
                latitude: latitude
            }
        })

        if (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Location Name"
                onChange={(e) => {
                    setCityName(e.target.value);
                }}
            />
            <input
                type="number"
                placeholder="Longitude"
                onChange={(e) => {
                    setLongitude(parseFloat(e.target.value));
                }}
            />
            <input
                type="number"
                placeholder="Latitude"
                onChange={(e) => {
                    setLatitude(parseFloat(e.target.value));
                }}
            />
            <button onClick={addLocation}> Add Location</button>
        </div>
    );
}

export default Form
