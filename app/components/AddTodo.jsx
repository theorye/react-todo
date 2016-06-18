import React from 'react';

const AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    let newTodo = this.refs.todoText.value;

    if(newTodo.length >0) {
      this.props.onAddTodo(newTodo);
    }
    this.refs.todoText.focus();
    this.refs.todoText.value = "";
  },
  render: function() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} >
          <input ref="todoText" type="text" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>

      </div>
    );
  }
});

export default AddTodo;
