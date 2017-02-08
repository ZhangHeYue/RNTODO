import { combineReducers } from 'redux';
import todos, * as todoActions from './todos';

export {
  todoActions,
};

export default combineReducers({
  todos,
});
