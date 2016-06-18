import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from "react-addons-test-utils";
import expect from 'expect';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe("TodoApp", ()=> {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo state on handleAddTodo', ()=> {
    let todoText = 'text test';
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text: 'Test Features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData] });


    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  // Test that when toggle from true to false, completedAt get removed
  it('should toggle todo from completed to incomplete', () => {
    let todoData = {
      id: 11,
      text: 'Test Features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };

    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData] });


    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
