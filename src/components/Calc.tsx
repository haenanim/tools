import React, { SyntheticEvent, useState } from 'react';
import './Calc.css';

export default function Calc() {
  const [inputNum, setInputNum] = useState<string>('');

  function clickNumpad(e: any) {
    setInputNum(inputNum + e.target.id);
  }
  function makeNumpad() {
    const pad = [];
    for (let i = 1; i <= 9; ++i) {
      pad.push(
        <div
          id={String(i)}
          onClick={(e) => {
            clickNumpad(e);
          }}
          key={i}
        >
          {i}
        </div>
      );
    }
    return pad;
  }
  return (
    <div>
      <div className="res-display"> {inputNum}</div>
      <div className="num-pad">{makeNumpad()}</div>
    </div>
  );
}
