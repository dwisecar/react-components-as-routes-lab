import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import movies from './data'

render (
  <App movies={movies}/>,
  document.getElementById('root')
);
