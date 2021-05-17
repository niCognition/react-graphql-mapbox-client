import { gql } from '@apollo/client'

export const CREATE_LOCATION_MUTATION = gql`

    mutation createLocation(
        $city_name: String! 
        $latitude: Float!
        $longitude: Float!
        ) {
        createLocation(
            city_name: $city_name
            latitude: $latitude
            longitude: $longitude
            ) {
                id
            }
        }
`