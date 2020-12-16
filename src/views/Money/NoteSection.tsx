import * as React from 'react';
import styled from 'styled-components';
import {ChangeEventHandler} from 'react';
import {Input} from "../../Components/Input";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

type Props = {
    value: string,
    onChange: (note: string) => void
}


const NoteSection: React.FunctionComponent<Props> = (props) => {
    let note = props.value
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
            props.onChange(e.target.value);

    };

    return (
        <Wrapper>
            <Input label="备注" type="text"
                   placeholder='写点备注吧~'
                   value={note}
                   onChange={onChange}
            />
        </Wrapper>
    );
};

export default NoteSection;
