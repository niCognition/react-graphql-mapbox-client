import { gql } from '@apollo/client'

export const LOAD_LOCATIONS = gql`
    query {
        getAllLocations{
            id
            city_name
            latitude
            longitude
        }
    }
`