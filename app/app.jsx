import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';

$(document).foundation();

// app scss
import './styles/app.scss';

render(
  <TodoApp/>,
  document.getElementById('app')
);
