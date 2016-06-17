import React from 'react';

import TodoList from 'TodoList';

const TodoApp = React.createClass({


  // Let's us set up our initial States
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: "Walk the dog"
        },
        {
          id: 2,
          text: "Clean the yard"
        },
        {
          id: 3,
          text: "leave mail on porch"
        },
        {
          id: 4,
          text: "play video games"
        }
      ]
    };
  },
  render: function() {
    const {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

export default TodoApp;
