import {gql} from "graphql-tag";

export const __GET_POST__ = gql`
    query {
        getPost {
            id,
            title
        }
    }
`

export const __DELETE_POST__ = gql`
    mutation DeletePostById($id: Int!){
        deletePostById(id: $id)
    }
`

export const __GET_POST_BY_ID_ = gql`
    query GetPostById($id: Int!) {
        getPostById(id: $id) {
            id,
            title
        }
    }
`
