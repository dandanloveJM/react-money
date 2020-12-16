import React from "react";
import {useTags} from "../useTags";
import {useParams} from 'react-router-dom'

type Params = {
    id: string
}

const Tag: React.FunctionComponent = (props) => {
    const {findTags} = useTags();
    const {id} = useParams<Params>();
    const tag = findTags(parseInt(id))
    console.log(tag)
    return (
        <div>
            {tag.name}
        </div>
    )
}

export {Tag}
