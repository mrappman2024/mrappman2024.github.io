import React, { useState } from 'react'
//import './Todo.css'

function Todo() {
  const [toDoList, setToDoList] = useState([])
  const [toDoItem, setToDoItem] = useState("")
    return (
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input
            type="text"
            value={toDoItem}
            onChange={(e) => {
              setToDoItem(e.target.value);
            }}
            placeholder="🖊️ Add item..."
          />
          <i
            onClick={() =>
              setToDoList([
                ...toDoList,
                {id: Date.now(), text:toDoItem, status:false}
              ])
            }
            className="fas fa-plus"
          ></i>
        </div>
        <div className="todos">
          {toDoList.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      setToDoList(toDoList.filter((filterObj) => {
                        if (filterObj.id === obj.id) {
                          filterObj.status = e.target.checked;
                        }
                        return filterObj;
                      }));
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>{
                    setToDoList(toDoList.filter((filterObj)=>{
                      return filterObj.id !== obj.id
                    }))
                  }} className="fas fa-times"></i>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    );
  }

export default Todo