import expect from 'expect';
var actions = require('actions');

describe('Actions', ()=> {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    }

    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', ()=> {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    let res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action ', ()=> {
    let action = {
      type: 'TOGGLE_TODO',
      id: 123
    }
    let res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
