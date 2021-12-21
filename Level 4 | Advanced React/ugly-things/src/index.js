import React from 'react';
import ReactDOM from 'react-dom';
import { UglyThingsProvider } from './UglyThingsContext';

import './index.css';
import App from './App';

ReactDOM.render(
  <UglyThingsProvider>
    <App/> 
  </UglyThingsProvider>,
  document.getElementById("root"))

