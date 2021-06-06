import { gql } from '@apollo/client'

export const GET_USERS = gql`
    {
        getUsers {
            _id
            name
            profession
        }
    }
`

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $profession: String!) {
    createUser(name: $name, email: $email, profession: $profession) {
        _id,
        name,
        profession
    }
  }
`;