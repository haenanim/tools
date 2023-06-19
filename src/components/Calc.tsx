import React, { useState } from 'react';
import './Calc.css';

export default function Calc() {
  const [inputNum, setInputNum] = useState('0');
  const [resNum, setResNum] = useState(0);
  const [selectOperator, setSelectOperator] = useState('+');
  const [readyNewInput, setReadyNewInput] = useState(true);

  function clickNumpad(e: any) {
    const clickedNum = e.target.id;
    if (readyNewInput) {
      setInputNum(clickedNum);
      setReadyNewInput(false);
    } else {
      setInputNum((prev) => prev + clickedNum);
    }
  }

  function updateDisplay(result: any) {
    setInputNum(String(result));
  }

  function clickOperator(operator: any) {
    switch (selectOperator) {
      case '+':
        handleEqual();
        setSelectOperator('+');
        if (inputNum !== '0' && inputNum && inputNum !== '-') {
          setReadyNewInput(true);
        }

        break;
      case '-':
        handleEqual();
        setSelectOperator('-');
        if (readyNewInput) {
          setReadyNewInput(false);
          setInputNum('-');
        } else if (!readyNewInput) {
          setReadyNewInput(true);
        }
        break;
      case '*':
        setSelectOperator('*');
        if (!readyNewInput) {
        }
        break;
      case '/':
        setSelectOperator('/');
        break;
      default:
        break;
    }
    setSelectOperator(operator);
  }

  function handleEqual() {
    let result = 0;
    switch (selectOperator) {
      case '+':
        result = resNum + Number(inputNum);
        break;
      case '-':
        result = resNum - Number(inputNum);
        break;
      case '*':
        result = resNum * Number(inputNum);
        break;
      case '/':
        result = resNum / Number(inputNum);
        break;
      default:
        result = resNum;
    }
    updateDisplay(result);
    setResNum(result);
  }

  function handleClear() {
    setInputNum('0');
    setResNum(0);
  }

  function makeNumpad() {
    const pad = [];
    for (let i = 1; i <= 9; i++) {
      pad.push(
        <div id={String(i)} onClick={clickNumpad} key={i}>
          {i}
        </div>
      );
      if (i === 3 || i === 6 || i === 9) {
        pad.push(
          <div
            id={i === 3 ? '+' : i === 6 ? '-' : '*'}
            onClick={() => clickOperator(i === 3 ? '+' : i === 6 ? '-' : '*')}
            key={i === 3 ? '+' : i === 6 ? '-' : '*'}
          >
            {i === 3 ? '+' : i === 6 ? '-' : '*'}
          </div>
        );
      }
    }
    pad.push(
      <div id="C" onClick={handleClear} key="C">
        C
      </div>
    );
    pad.push(
      <div id="0" onClick={clickNumpad} key="0">
        0
      </div>
    );
    pad.push(
      <div id="=" onClick={handleEqual} key="=">
        =
      </div>
    );
    pad.push(
      <div id="/" onClick={() => clickOperator('/')} key="/">
        /
      </div>
    );

    return pad;
  }

  return (
    <div>
      <div>
        <div className="res-display">{inputNum}</div>
        <div className="pad">
          <div className="num-pad">{makeNumpad()}</div>
        </div>
      </div>
    </div>
  );
}
