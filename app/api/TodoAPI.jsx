import $ from 'jquery';

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, search) {
    let filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=> {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText

    // Sort todos with non-completed first

    return filteredTodos;
  }
}
