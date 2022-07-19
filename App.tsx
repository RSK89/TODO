import * as React from 'react';
import './style.css';
import React, { useState } from 'react';

export default function App() {
  let [Task, SetData] = useState(null);
  let [List, SetList] = useState([]);
  const UpdateData = (e) => {
    SetData(e.target.value);
  };
  const addTask = () => {
    SetList([...List, Task]);
  };
  return (
    <>
      <div>
        <input type="text" onChange={UpdateData} />
        <button onClick={addTask}>ADD</button>
      </div>
      <div>
        Total Tasks TODO is :{List.length}
        <br />
        {List}
      </div>
      <div>{}</div>
      <div>{}</div>
    </>
  );
}
