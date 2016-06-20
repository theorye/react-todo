import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=> {
  console.log('new state', store.getState);
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();

// app scss
import './styles/app.scss';

render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
