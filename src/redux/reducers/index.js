import { combineReducers} from 'redux';
import input from './inputReducer';

const rootReducers = combineReducers({
  input,
})

export default rootReducers;