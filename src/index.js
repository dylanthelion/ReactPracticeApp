import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import todoStore from './components/Todos/todoStore'
import { fetchTodos } from './components/Todos/todoService'

todoStore.dispatch(fetchTodos())

//console.log('In index: ' + JSON.stringify(x))

ReactDOM.createRoot(
  document.getElementById("root"),
)
.render(
  <Provider store={ todoStore }>
      <App />
  </Provider>
);
