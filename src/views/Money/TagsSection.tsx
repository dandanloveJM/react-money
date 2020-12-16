import * as React from 'react';
import styled from 'styled-components';
import {useTags} from "../../useTags";
import {createId} from "../../lib/createId";

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       &.selected{
        background: #f60;
       }
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;

type Props = {
    value: number,
    onChange: (selected: number) => void
};

const TagsSection: React.FunctionComponent<Props> = (props) => {
    const selectedTagId = props.value
    const {tags, setTags} = useTags()

    const onAddTag = () => {
        const tagName = window.prompt('新标签的名称是');
        if (tagName) {
            setTags([...tags, {id: createId(), name: tagName}]);
        }
    };


    const onToggleTag = (tagId: number) => {
        props.onChange(tagId)
    };

    const getClass = (tagId: number) => selectedTagId === tagId ? 'selected' : '';

    return (
        <Wrapper>
            <ol>
                {tags.map(tag => {
                    return <li key={tag.id} onClick={() => {
                        onToggleTag(tag.id);
                    }}
                               className={getClass(tag.id)}
                    >{tag.name}</li>;
                })}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );

};

export default TagsSection;
