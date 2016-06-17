import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

$(document).foundation();

// app scss
import './styles/app.scss';

render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
