import React, { Component } from 'react';


class AddTodo extends Component {

    submitTodo = (e) => {
        e.preventDefault()
        if(!this.input.value.trim())
            return
        console.log(this.input.value)
        this.input.value = '' 
    }


  render() {
    return (
      <div>
          <form onSubmit = {this.submitTodo}>
            <input ref = {node => this.input = node}/>
            <button type = "submit" onClick = {this.props}>Add</button>
          </form>
      </div>
    );
  }
}

    let mapDispatchToProps = (dispatch) => {
        return {
            
        }
    }

export default AddTodo;
