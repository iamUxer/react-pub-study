import React from "react";
import { useState, useRef } from "react";

const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const [addList, setAddList] = useState([]);

  const inputFocus = useRef();

  const todoinputHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const addHandler = () => {
    setAddList([...addList, todoInput]);
    setTodoInput("");
    inputFocus.current.focus();
  };
  const deleteHandler = (listIndex) => {
    console.log(addList);

    setAddList(
      //filter = array return
      addList.filter((item, index) => {
        return index !== listIndex;
      })
    );
  };

  return (
    <>
      <h2>Todo - Array</h2>
      <div>
        <input
          type="text"
          ref={inputFocus}
          value={todoInput}
          onChange={todoinputHandler}
        />
        <button onClick={addHandler}>Add</button>
      </div>
      <ul>
        {addList.map((item, idx) => {
          return (
            <li key={idx}>
              {item} <button onClick={() => deleteHandler(idx)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
