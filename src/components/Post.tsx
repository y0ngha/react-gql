import React, {useCallback} from "react"
import {useMutation, useQuery} from "@apollo/react-hooks";
import {__DELETE_POST__, __GET_POST__} from "../queries/Queries";

interface GetPostQuery {
    getPost: GetPost[]
}

interface GetPost {
    id: number,
    title: string
}

function Post() {
    const {loading, error, data, refetch} = useQuery<GetPostQuery>(__GET_POST__)
    const [dataDelete] = useMutation(__DELETE_POST__)
    console.log(error, data)

    const fetchDataDelete = useCallback(async (id: number) => {
        const result = await dataDelete({
            variables: {
                id: id
            }
        })
        refetch()
        console.log(result)
    }, [])
    return (
        <>
            {
                loading ? "Loading..." : ""
            }
            {
                error ? error.message : ""
            }
            {
                data?.getPost.length !== 0 &&
                data?.getPost.map((it: GetPost) => {
                    return (
                        <div className={"post"} key={it.id}>
                            <span key={`${it.id}-span`}>{it.title}</span>
                            <button key={`${it.id}-button`} onClick={async () => { await fetchDataDelete(it.id)}}>Delete</button>
                            <br/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Post
