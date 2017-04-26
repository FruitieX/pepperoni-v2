import { combineReducers } from 'redux';
import { reducer as counter } from '../modules/Counter';
import { reducer as navigator } from '../modules/Navigator';

export default rootReducer = combineReducers({
  // Counter sample app state. This can be removed in a live application
  counter,

  // Navigator state
  navigator,
});
