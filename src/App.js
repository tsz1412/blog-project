import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './MainRouter';

const App = () => (
  <BrowserRouter>
      <div><MainRouter/></div>
  </BrowserRouter>
)

export default App;

