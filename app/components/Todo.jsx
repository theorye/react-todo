import React from 'react';
import moment from 'moment';

const Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={ () => {
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo_subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;
