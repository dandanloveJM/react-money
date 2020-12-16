import React from "react";
import styled from "styled-components";

type Props = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>
// 继承所有input的属性
const Label = styled.label`
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      height: 44px;
      background: none;
      border: none;
    }
`;


const Input: React.FC<Props> = (props) => {
    const {label, children, ...rest} = props;

    return (
        <Label>
            {/*props.label就是标签名*/}
            <span>{props.label}</span>
            <input {...rest} />
        </Label>
    )
}

export {Input}
