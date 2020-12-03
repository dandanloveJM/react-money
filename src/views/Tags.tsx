import * as React from 'react';
import Layout from '../Components/Layout';
import {useTags} from "../useTags";

const Tags: React.FunctionComponent = () => {
    const {tags, setTags} = useTags()
    return (
        <Layout>
            <ol>
                {tags.map(tag =>
                    (<li key={tag}>{tag}</li>))}
            </ol>
        </Layout>
    );
};

export default Tags;
