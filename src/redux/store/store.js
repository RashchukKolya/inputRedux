import {createStore, compose, applyMiddleware} from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducers, compose(applyMiddleware(thunk), DevTools));

export default store;