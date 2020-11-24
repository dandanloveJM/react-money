import * as React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const CategorySection: React.FunctionComponent = () => {
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  const categoryMap = {'-': '支出', '+': '收入'};

  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
            onClick={() => setCategory(c)}
              className={category === c ? 'selected' : ''}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  );
};

export default CategorySection;