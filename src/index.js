import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import App from './components/App'

const store = createStore(reducer)
store.subscribe(() => {
  console.log("store changed", store.getState());
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch({ type: "ADD_TWEET", text: "123" })