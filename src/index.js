import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './store'

// console.log('Initial state: ', store.getState())

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })

console.log('State after dispatch: ', store.getState())
// log: {todos: [...], filters: {status, colors}, meaningOfLife: 42}

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

unsubscribe()

ReactDOM.render(
      <App />,
  document.getElementById('root')
);
