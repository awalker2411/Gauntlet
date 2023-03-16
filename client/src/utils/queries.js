import { gql } from '@apollo/client'

export const GET_ME = gql`
    {
        _id
        username
        email 
        password
        characters{
            _id
            charName
            charType
            image
            description
        }
    }
`