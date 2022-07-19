import * as React from 'react';
import './style.css';
import React, { useState } from 'react';

function App() {
  let [Task, SetData] = useState(null);
  let [allTask, SetList] = useState([]);
  const UpdateData = (e) => {
    SetData(e.target.value);
  };
  const addTask = () => {
    if (allTask.length < 5) {
      SetList([...allTask, Task]);
    } else {
      alert('Only 5 Tasks Allowed');
    }
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
        {/*allTask.length > 0 ? allTask : 'you have zero tasks '*/}
        {allTask.map((T) => (
          <h1 key={T}>{T}</h1>
        ))}
      </div>
    </>
  );
}
export default App;
