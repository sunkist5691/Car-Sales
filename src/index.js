import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux' 
// When you want to use Redux, you need a bridge library that enables and connects Redux into React
// That bridge library is called 'react-redux'
// Provier is one of the bridge pieces from 'react-redux'

import { carReducer } from './reducer/carReducer'
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// STEP 1 - create the redux store and connect it to our React app

const store = createStore(carReducer)
console.log(store.getState()) 
// Inside of 'store' variable,
// it stored 'initialState' object from 'carReducer'
// Currently the state parameter from 'carReducer' is 'initialState' object 
// and the action parameter is equal to object that contains type property with a value of random weird number,
// and that type is automatically randomized by Redux system, which to return default value inside of 'carReducer'

const rootElement = document.getElementById('root');
 
ReactDOM.render(

   <Provider store={ store }>
      <App />
   </Provider>,
   rootElement

);
