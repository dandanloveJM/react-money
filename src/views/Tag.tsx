import React from "react";
import {useTags} from "../useTags";
import {useParams} from 'react-router-dom'
import Layout from "../Components/Layout";
import Icon from "../Components/Icon";
import styled from "styled-components";
import {Button} from "../Components/Button";
import {Input} from "../Components/Input";
import {Center} from "../Components/Center";
import {Space} from "../Components/Space";

type Params = {
    id: string
}

const TopBar = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 line-height: 20px;
 padding: 14px;
 background: white;
`
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FunctionComponent = (props) => {
    const {findTags, updateTag, deleteTag} = useTags();
    const {id: idString} = useParams<Params>();
    const tag = findTags(parseInt(idString))
    const tagContent = (tag: { id: number; name: string }) => {
        return (
            <div>
                <InputWrapper>
                    <Input label="标签名" type="text" value={tag.name}
                           onChange={(e) => updateTag(tag.id, {name: e.target.value})}/>

                </InputWrapper>
                <Center>
                    <Space/>
                    <Space/>
                    <Space/>
                    <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
                </Center>
            </div>
        )
    }
    return (
        <Layout>
            <TopBar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </TopBar>

            {tag ? tagContent(tag) : <Center>标签不存在</Center>}

        </Layout>
    )
}

export {Tag}
