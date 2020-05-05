import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './components/MainPage';

ReactDOM.hydrate(
  <MainPage />,
  document.getElementById('mountNode'),
);