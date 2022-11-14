import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom'
import { TodoPage } from './components/Todos/TodoPage'
import todoStore from './components/Todos/todoStore'
import { fetchTodos } from './components/Todos/todoService'
import todos from './components/Todos/reducers'



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  async componentDidMount() {
      this.props.todos([],'FETCH_TODOS_SUCCESS');
  }

  render() {
       console.log("In return: " + JSON.stringify(this.props))
          return this.props.data.length ? (
            <Router>
                <div className="App">
                  <Routes>
                    <Route
                      path="/"
                      element={<TodoPage todos={this.props.data} />}
                    />
                  </Routes>
                </div>
              </Router>
          ) : (
            <h4>Loading...</h4>
          );
      }
}

const mapStateToProps = (state) => {
  console.log("State: " + JSON.stringify(state));
  return state;
};

const mapDispatchToProps = {
   todos
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);
