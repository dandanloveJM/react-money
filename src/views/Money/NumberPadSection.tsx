import * as React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const Wrapper = styled.section`
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


const NumberPadSection: React.FunctionComponent = () => {
  const [output, setOutput] = useState('0');
  const onClickButtonWrapper = (e: React.MouseEvent) => {

    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null || output.length >= 11) {return;}


    console.log('11')
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        const dotPosition = output.indexOf('.');
        if (output === '0') {
          setOutput(text);
        } else if (dotPosition < 0 || output.length - dotPosition <= 2) {
          let newText = output + text;
          setOutput(newText);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) {
          return;
        } else {
          setOutput(output + '.');
        }
        break;
      case '删除':
        let number = output.slice(0, -1) || '0'
        setOutput(number)
        break;
      case '清空':
        setOutput('0')
        break;
      default:
        return;


    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="dot">.</button>
        <button className="zero">0</button>
        <button className="ok">OK</button>
      </div>
    </Wrapper>
  );
};

export default NumberPadSection;
