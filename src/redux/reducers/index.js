import {combineReducers} from 'redux';
import text from './inputReducer'

const rootReducer= combineReducers({
    text,
})

export default rootReducer;