import React, { Component, useState } from 'react';
import './App.css';

const ToDoItem = (props) => {

    return (
      <div className="container">
        <div className="toDoItem">
          {props.name}
        </div>
        <button className="deleteButton" onClick={() => props.onDelete()}>X</button>
      </div>
    )
}
  
const initialTodoList = ['Sample todo item 1', 'Sample todo item 2', 'Sample todo item 3: long text break check '];

const Todo = (props) => {
    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState(initialTodoList)

    const onChange = (event) => {
        setInput(event.target.value);
    }

    const onDelete = (index) => {
        let filteredList = todoList.filter((todo, indx) => {
        return indx != index;
        });
        setTodoList(filteredList);
    }

    const submit = () => {
        setTodoList([...todoList, input]);
        setInput('')
    }

    return (
        <div className="App">
        <h1>TO-DO LIST USING REACT</h1>
        <div>
            <input className="addButton" type="text" value={input} onChange={onChange} />
            <button className="addButton" onClick={submit}> Add </button>

            <div className="toDoList">
            {
                todoList.map((todo, index) => {
                return <ToDoItem name={todo} onDelete={() => onDelete(index)} />
                })
            }
            </div>
        </div>
        </div>
    )
}

export default Todo;