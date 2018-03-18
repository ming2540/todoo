import React from 'react'

const Todo = ({text, toggleTodo ,removeTodo, completed , removed})=> (
    <div style = {{display : removed? 'none' : 'block'}}>
        <li  onClick = {toggleTodo} style = {{textDecoration : completed? 'line-through' : 'none'}}>
            {text}
        </li>
        <button onClick = {removeTodo} style = {{display : (!completed)? 'none' : 'block' }}>remove</button>
    </div>
)

export default Todo;