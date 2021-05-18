import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useQuery, gql } from '@apollo/client';
import { LOAD_LOCATIONS } from '../GraphQL/Queries';

function TestMap() {

    const { error, loading, data } = useQuery(LOAD_LOCATIONS);
    const [locations, setLocations] = useState([]);
    const [viewport, setViewport] = useState({
        latitude: 59.6749712,
        longitude: 14.5208584,
        width: "100vw",
        height: "100vh",
        zoom: 5
    });

    useEffect(() => {
        if (data) {
            setLocations(data.getAllLocations)
        }
    }, [data]);

    return (
        <div>
            <ReactMapGL {...viewport}
                mapboxApiAccessToken={"pk.eyJ1IjoiYWJ1bWlsb2wiLCJhIjoiY2tvdHF3am4xMDV4cTJxbXZxMjk1cGtsbyJ9.gbg588K2q18f7t3Q-Qzr-Q"}
                mapStyle="mapbox://styles/abumilol/ckotrt3do028817o7k52j5pqa"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {locations.map((val) => {
                    return (
                    <Marker key={val.id} latitude={val.latitude} longitude={val.longitude}>
                        <div>
                            <a style={{ fontSize: '10px', color: 'white' }}>{val.city_name}</a>
                        </div>
                    </Marker>
                    )
                })}
            </ReactMapGL>
        </div>
    )
}

export default TestMap
