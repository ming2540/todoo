import React from 'react'

const Todo = ({text, toggleTodo ,removeTodo, completed})=> (
    <li>
        <ul  onClick = {toggleTodo} style = {{textDecoration : completed? 'line-through' : 'none' }}>{text}</ul>
        <button onClick = {removeTodo} style = {{display : (!completed)? 'none' : 'block' }}>remove</button>
    </li>
)

export default Todo;