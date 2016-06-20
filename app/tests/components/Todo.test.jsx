import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from "react-addons-test-utils";
import expect from 'expect';
import $ from 'jquery';

// grabs raw TODO component
import {Todo} from 'Todo';

describe("Todo", ()=> {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch Toggle_TODO action on click', () => {
    let todoData = {
      id: 199,
      text: 'Test text',
      completed: true
    };

    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

    var $el= $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  });

});
