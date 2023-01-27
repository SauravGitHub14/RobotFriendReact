import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import { robots } from './robots'
// import CardList from './CardList';
// import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <CardList robots ={robots}/>
  <App/>

 
);
reportWebVitals();
