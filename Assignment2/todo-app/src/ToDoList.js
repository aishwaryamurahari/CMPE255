//create a todo functional component that will fetch todos from the server and display them in a list and a form to add new todos and a button to delete todos

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3002/todos')
            .then(res => setTodos(res.data));
    }, []);

    const addTodo = () => {
        axios.post('http://localhost:3002/todos', { title })
            .then(res => setTodos([...todos, res.data]));
    };


    const deleteTodo = id => {
        axios.delete(`http://localhost:3002/todos/${id}`)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)));
    };

    return (
        <div className="container"> {/* Add class name for styling */}
            <h1>Todo List</h1>
            <form>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <button type="button" className='todo-button' onClick={addTodo}>Add Todo</button>
            </form>
            <ul className = 'todo-list-container'>
                {todos.map(todo => (
                    <li className='todo-item' key={todo.id}>
                        {todo.title}
                        <button className= 'delete-button' type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;