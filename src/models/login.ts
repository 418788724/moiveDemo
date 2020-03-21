import { Effect } from 'dva';
import { Reducer } from 'redux';

export interface LoginStateType {
  status?: 'ok' | 'error';
  type?: string;
}

export interface LoginModeType {
  namespace: string;
  state: LoginStateType;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<LoginStateType>;
  };
}

const LoginModel: LoginModeType = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    *login() {},
    *logout() {},
  },
  reducers: {
    changeLoginStatus(state, { payload }): LoginStateType {
      return {
        ...state,
      };
    },
  },
};

export default LoginModel;
