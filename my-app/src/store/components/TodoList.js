import {state} from './index.js'
import React from 'react';
export default function TodoList (state,onToggle,) {
    return (
        <ul>
            {todos.map ((todo) => (
            <li class='task-item' key={todo.id} onTodoItemClick={()=>onToggle(todo.id)}>
                {todo.title} 
                <button onDltBtnClick={()=>todos.onDelete(todo.id)} class='btn-delete'>X</button>
            </li>))}
        </ul>
    )
}