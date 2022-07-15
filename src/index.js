import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouteF from "./routes/index"

ReactDOM.render(
  <BrowserRouter>
    <RouteF />
  </BrowserRouter>
  , document.getElementById('root')
)
