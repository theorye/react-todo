import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from "react-addons-test-utils";
import expect from 'expect';
import $ from 'jquery';


import AddTodo from 'AddTodo';

describe("AddTodo", ()=> {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo prop with valid data', () => {
    let testText = 'Check mail';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = testText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(testText);
  });

  it('should not call onAddTodo prop with invalid data', () => {
    let testText = '';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = testText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
