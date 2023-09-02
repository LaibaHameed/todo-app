"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [taskBox, setTaskBox] = useState([]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTaskBox([...taskBox, { task }]);
    setTask("");
  };

  const deleteHandler = (i) => {
    let copyTasks = [...taskBox];
    copyTasks.splice(i);
    setTaskBox(copyTasks);
  };

  let renderTask = <h3>No Tasks To Be Done</h3>;

  if (taskBox.length > 0) {
    renderTask = taskBox.map((t, i) => {
      return (
        <section className="task" key={i}>
          <span className="task-name">{t.task}</span>
          <button
            className="delete"
            onClick={() => {
              deleteHandler(i);
            }}
          >
            delete
          </button>
        </section>
      );
    });
  }
  return (
    <>
      <div className="app">
        <h1>ToDo List App</h1>
        <div className="container">
          <form id="wrapper" onSubmit={onSubmitHandler}>
            <div className="textInputWrapper">
              <input
                placeholder="Task To Be Done"
                type="text"
                className="textInput"
                value={task}
                onChange={(e) => {
                  setTask(e.target.value);
                }}
              />
            </div>
            <button id="add-btn">
              <span>Add</span>
            </button>
          </form>
          <section id="tasks">{renderTask}</section>
        </div>
      </div>
    </>
  );
};

export default page;
