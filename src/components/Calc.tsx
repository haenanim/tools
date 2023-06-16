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
    pad.push(
      <div
        id="C"
        onClick={(e) => {
          clickNumpad(e);
        }}
        key="C"
      >
        C
      </div>
    );
    pad.push(
      <div
        id="0"
        onClick={(e) => {
          clickNumpad(e);
        }}
        key="0"
      >
        0
      </div>
    );
    pad.push(
      <div
        id="E"
        onClick={(e) => {
          clickNumpad(e);
        }}
        key="E"
      >
        E
      </div>
    );
    return pad;
  }
  return (
    <div>
      <div className="res-display"> {inputNum}</div>
      <div className="num-pad">{makeNumpad()}</div>
    </div>
  );
}
