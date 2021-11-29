import React from "react";
import { useState, useRef } from "react";

const TodoListObj = () => {
  const [todoInput, setTodoInput] = useState("");
  const [addList, setAddList] = useState([]);
  const [id, setId] = useState(0);

  const inputFocus = useRef();

  const todoinputHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const addHandler = () => {
    setAddList([...addList, { id: id, todo: todoInput }]);
    setId(id + 1);
    setTodoInput("");
    inputFocus.current.focus();
  };
  const deleteHandler = (listId) => {
    setAddList(
      //filter = array return
      addList.filter((item) => {
        //addList의 객체 리스트 id를 이용해서 삭제
        return item.id !== listId;
      })
    );
    inputFocus.current.focus();
  };

  return (
    <>
      <h2>Todo-Object</h2>
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
        {addList.map((list, idx) => {
          return (
            <li key={idx}>
              {list.todo}
              <button onClick={() => deleteHandler(list.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoListObj;
