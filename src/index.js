import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"

import './global.css'
import Badges from './pages/Badges';

  const container = document.getElementById('root');

ReactDOM.render(
  // <Badge
  //   firstName="Brayhan"
  //   lastName="Gabriel"
  //   jobTitle="Software Engineer"
  //   twitter="@gbrayhan"
  // />,
  <Badges/>,
  container
);