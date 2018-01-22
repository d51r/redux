import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux'
import reducer from './reducers'
import App from './App'

const store = createStore(reducer)
store.subscribe(() => {
  console.log("store changed", store.getState());
})

render(
  <App />,
  document.getElementById('root')
);

store.dispatch({ type: "ADD_TWEET", text: "123" })