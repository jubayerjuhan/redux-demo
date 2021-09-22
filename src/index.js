import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import { Reducer } from './reducer.js';
import { Reducerx } from "./reducer2";

const rootReducer = combineReducers({
  one: Reducer,
  two: Reducerx,
})
const store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
