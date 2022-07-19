import * as React from 'react';
import './style.css';
import React, { useState } from 'react';

export default function App() {
  let [Task, SetData] = useState(null);
  let [allTask, SetList] = useState([]);
  const UpdateData = (e) => {
    SetData(e.target.value);
  };
  const addTask = () => {
    SetList([...allTask, Task]);
  };
  return (
    <>
      <div>
        <input type="text" onChange={UpdateData} />
        <button onClick={addTask}>ADD</button>
      </div>
      <div>
        Total Tasks TODO is :{allTask.length}
        <br />
        {allTask}
      </div>
      <div>{}</div>
      <div>{}</div>
    </>
  );
}
