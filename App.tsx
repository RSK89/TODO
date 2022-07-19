import * as React from 'react';
import './style.css';
import React, { useState } from 'react';

export default function App() {
  let [data, SetData] = useState([]);
  const add = () => {
    SetData([]);
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            SetData(e.target.value);
          }}
        />
        <button onClick={add}>ADD</button>
      </div>
      <div>{data}</div>
    </>
  );
}
