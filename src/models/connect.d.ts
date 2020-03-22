import { AnyAction } from 'redux';
import { Dispatch } from 'dva';

import { GlobalModelState } from './global';
import { LoginStateType } from './login';
import { UserModelState } from './user';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  login: LoginStateType;
  user: UserModelState;
}

export interface ConnectProps {
  dispatch?: Dispatch<AnyAction>;
}
