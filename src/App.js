import React, { Component } from 'react';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './components/AddTodo';


class App extends Component {
  render() {
    return (
      <div>
        <VisibleTodoList/>
        <AddTodo/>
      </div>
    );
  }
}

export default App;
