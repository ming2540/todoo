import React , {Component} from 'react'
import TodoList from '../components/TodoList';
import {connect} from 'react-redux'
import { toggleTodo ,VisibilityFilters } from '../actions';
import {createSelector} from 'reselect'
import todos from '../reducers/todos';
import visibilityFilter from '../reducers/visibilityFilter';

const getVisibleTodos = (todos , filter) => {
  switch(filter){
    case VisibilityFilters.SHOW_COMPLETED :
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE :
      return todos.filter(t => !t.completed)
    default:
      return todos

  }

}

// class VisibleTodoList extends Component{
    
//     render() {
//         return (
//           <TodoList {...this.props} />
//         );
//       }
//     }

// const todoSelector = (state) => state.todos
// const visibilityFilterSelector = (state) => state.visibilityFilter
// const getVisibleTodosSelector = createSelector([todoSelector,visibilityFilterSelector],
//   (todos , visibilityFilter) => getVisibleTodos(todos , visibilityFilter)
// )

let mapStateToProps = (state) => ({
  todos : getVisibleTodos(state.todos , state.visibilityFilter)
}) 
let mapDispatchToProps = (dispatch) => ({
  toggleTodo : (id) => dispatch(toggleTodo(id))

})
export default connect(mapStateToProps ,mapDispatchToProps)(/*Visible*/TodoList);