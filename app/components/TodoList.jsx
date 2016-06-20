import React from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';

const TodoList = React.createClass({
  render: function() {
    let {todos} = this.props;

    let renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }

});

module.exports = connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
