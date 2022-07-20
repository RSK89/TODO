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
    const newTask = {
      id: allTask.length === 0 ? 1 : allTask[allTask.length - 1].id + 1,
      name: Task,
    };

    if (allTask.length < 5) {
      SetList([...allTask, newTask]);
    } else {
      alert('Only 5 Tasks Allowed');
    }
  };

  const handledelete = (id) => {
    SetList(allTask.filter((ta) => ta.id !== id));
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
          <h1>
            {T.name}
            <button onClick={() => handledelete(T.id)}>Delete</button>
          </h1>
        ))}
      </div>
    </>
  );
}
export default App;
