import {ISettings, IUser} from 'interface';
import {Dispatch} from 'redux';
import {SETTINGS, USER} from 'actions/types';

export const setSettings = (type: ISettings) => (dispatch: Dispatch) => {
  dispatch({
    type: SETTINGS,
    payload: type,
  });
};

export const setUser = (type: IUser) => (dispatch: Dispatch) => {
  dispatch({
    type: USER,
    payload: type,
  });
};
