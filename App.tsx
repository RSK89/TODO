import * as React from 'react';
import './style.css';
import React, { useState } from 'react';

export default function App() {
  let [data, SetData] = useState(null);
  let [List, SetList] = useState(['']);
  const UpdateData = (e) => {
    SetData(e.target.value);
  };
  const add = () => {
    SetList([...List, data]);
  };
  return (
    <>
      <div>
        <input type="text" onChange={UpdateData} />
        <button onClick={add}>ADD</button>
      </div>
      <div>{List[1]}</div>
      <div>{List[2]}</div>
      <div>{List[3]}</div>
    </>
  );
}
