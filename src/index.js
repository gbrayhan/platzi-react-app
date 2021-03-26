import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"

import './global.css'
import App from './component/App'

  const container = document.getElementById('root');

ReactDOM.render(
  // <Badge
  //   firstName="Brayhan"
  //   lastName="Gabriel"
  //   jobTitle="Software Engineer"
  //   twitter="@gbrayhan"
  // />,
  <App/>,
  container
);