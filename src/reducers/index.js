import { combineReducers } from 'redux';
import analysis from './analysis';
import users from './user';

  const  rootReducer = combineReducers({
    analysis,
    users
  })
export default rootReducer;