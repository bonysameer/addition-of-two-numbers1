import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const [output, setOutput] = useState(0);

  function Addition() {
    setOutput(Number(output) + Number(text) + Number(text2));
  }
  function valueOnChange(e) {
    setText(e.target.value);
  }
  function valueOnChange2(d) {
    setText2(d.target.value);
  }

  return (
    <div>
      <header>
        <input
          className="field"
          onChange={valueOnChange}
          value={text}
          type="Number"
          placeholder="enter first number"
        />
        <input
          onChange={valueOnChange2}
          value={text2}
          type="Number"
          placeholder="enter second number"
        />

        <button className="btn" onClick={Addition}>
          Addition
        </button>

        <p className="result">Answer : {output}</p>
      </header>
    </div>
  );
}
