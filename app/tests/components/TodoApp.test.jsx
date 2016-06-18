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
  });
});
