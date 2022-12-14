import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import todos from './reducers'

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const todoStore = createStore(todos, composeEnhancers(
    applyMiddleware(thunk)
));

export default todoStore
