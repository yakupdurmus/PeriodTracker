import {ISettings, IUser} from 'interface';

export interface IRootState {
  colleciton: {
    user: IUser;
    settings: ISettings;
  };
}
