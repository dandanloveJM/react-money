import React from "react";
import {useTags} from "../useTags";
import {useParams} from 'react-router-dom'
import Layout from "../Components/Layout";
import Icon from "../Components/Icon";
import styled from "styled-components";
import {Button} from "../Components/Button";

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

const Tag: React.FunctionComponent = (props) => {
    const {findTags, updateTag} = useTags();
    const {id: idString} = useParams<Params>();
    const tag = findTags(parseInt(idString))
    return (
       <Layout>
           <TopBar>
               <Icon name="left"/>
               <span>编辑标签</span>
               <Icon/>
           </TopBar>
           <div>
               <label>
                   <span>标签名</span>
                   <input
                          type="text"
                          placeholder="标签名"
                          value={tag.name}
                          onChange={(e)=>{
                              updateTag(tag.id, {name: e.target.value})
                          }}
                   />
               </label>
           </div>
           <div>
               <Button>删除标签</Button>
           </div>
       </Layout>
    )
}

export {Tag}
