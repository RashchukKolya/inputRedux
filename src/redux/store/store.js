import {createStore} from 'redux';
import rootReducers from '../reducers';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducers, DevTools);

export default store;