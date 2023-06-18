import React, { SyntheticEvent, useEffect, useState } from 'react';
import './Calc.css';

export default function Calc() {
  const [inputNum, setInputNum] = useState<string>('0');
  const [waitInput, setWaitInput] = useState<boolean>(true);
  const [resNum, setResNum] = useState<number>(0);

  function clickNumpad(e: any) {
    if (waitInput) {
      setInputNum(e.target.id);
      setWaitInput(false);
    } else {
      if (inputNum === '0') {
        setInputNum(e.target.id);
      } else {
        setInputNum(inputNum + e.target.id);
      }
    }
  }
  function updateDisplay(result: number) {
    setInputNum(String(result));
  }
  function clickOperator(operator: string) {
    setWaitInput(true);
    switch (operator) {
      case '+':
        setResNum((prev) => {
          const result = prev + Number(inputNum);
          updateDisplay(result);
          return result;
        });
        break;
      case '-':
        break;
      case '*':
        break;
      case '/':
        break;
    }
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
      if (i === 3) {
        pad.push(
          <div
            id="+"
            onClick={(e) => {
              clickOperator('+');
            }}
            key="+"
          >
            +
          </div>
        );
      }
      if (i === 6) {
        pad.push(
          <div
            id="-"
            onClick={(e) => {
              clickNumpad(e);
            }}
            key="-"
          >
            -
          </div>
        );
      }
      if (i === 9) {
        pad.push(
          <div
            id="*"
            onClick={(e) => {
              clickNumpad(e);
            }}
            key="*"
          >
            *
          </div>
        );
      }
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
    pad.push(
      <div
        id="/"
        onClick={(e) => {
          clickNumpad(e);
        }}
        key="/"
      >
        /
      </div>
    );

    return pad;
  }
  return (
    <div>
      <div>
        <div className="res-display"> {inputNum}</div>
        <div className="pad">
          <div className="num-pad">{makeNumpad()}</div>
        </div>
      </div>
    </div>
  );
}
