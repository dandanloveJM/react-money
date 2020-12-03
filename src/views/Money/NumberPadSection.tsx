import * as React from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

type Props = {
    value: string,
    onChange: (selected: string) => void,
    onOk?: ()=>void
}

// const convertRMBToCent = (amount: string) => {
//     const lastTwoChars = amount.slice(-2)
//     if (lastTwoChars === '00') {
//         return amount.slice(0, -2)
//     } else if (lastTwoChars.indexOf('0') >= 0) {
//         return amount.slice(0, -2) + '.' + amount.slice(-2, -1)
//     } else {
//         return amount.slice(0, -2) + '.' + lastTwoChars
//     }
//
// }

const NumberPadSection: React.FunctionComponent<Props> = (props) => {
    // const [output, setOutput] = useState('0');
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return;
        }
        if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
            props.onChange(generateOutput(text, props.value));
        }
    };
    return (
        <Wrapper>
            <div className="output">
                {props.value}
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
