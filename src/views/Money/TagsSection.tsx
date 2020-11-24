import * as React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

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

const TagsSection: React.FunctionComponent = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTag, setSelectedTags] = useState<string>('');

  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称是');
    if (tagName) {
      setTags([...tags, tagName]);
    }
  };


  const onToggleTag = (tag: string) => {
    setSelectedTags(tag)
  };

  const getClass = (tag:string) => selectedTag === tag ? 'selected' : '';

  return (
    <Wrapper>
      <ol>
        {tags.map(tag => {
          return <li key={tag} onClick={() => {onToggleTag(tag);}}
                     className={getClass(tag)}
          >{tag}</li>;
        })}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );

};

export default TagsSection;