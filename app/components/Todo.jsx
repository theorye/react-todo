import React from 'react';

const Todo = React.createClass({
  render: function () {
    var {id, text} = this.props;
    return (
      <div>
        {id}.{text}
      </div>
    );
  }
});

module.exports = Todo;
