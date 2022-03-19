import {SETTINGS, USER} from 'actions/types';
import {combineReducers} from 'redux';

const INITIAL_STATE = {
  user: {},
  settings: {},
};

const reduxReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case USER:
      return {...state, user: action.payload};
    case SETTINGS:
      return {...state, settings: action.payload};
    default:
      return state;
  }
};

export default combineReducers({
  collection: reduxReducer,
});
