import styled from "styled-components";

export const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{ 
      display:flex;
      flex-wrap: wrap;
      justify-content: space-around;
      flex-grow: 1;
      padding: 2px;
      min-height: 0;
      margin: 1px 3px;
    > button{
     width: 21%;
    border: 1px solid #333;
    border-radius: 10px;
    background: #fff;
    flex-grow: 1;
    padding: 2px;
    margin: 3px;
    font-size: 16px;
    flex-shrink: 1;
    min-height: 0;
     
    }
  }
`;