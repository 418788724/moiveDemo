import { Effect } from 'dva';
import { Reducer } from 'redux';

export interface CurrentUser {
  avatar?: string;
  name?: string;
  group?: string;
  signature?: string;
  tag?: {
    key: string;
    label: string;
  }[];
  userId?: string;
}

export interface UserModelState {
  currentUser?: CurrentUser;
}

export interface UserModelType {
  namespace: string;
  state: UserModelState;
  effects: {
    getUserInfo: Effect;
    saveUserInfo: Effect;
  };
  reducers: {
    changeUserStatus: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *getUserInfo() {},
    *saveUserInfo() {},
  },
  reducers: {
    changeUserStatus(state) {
      return {
        ...state,
      };
    },
  },
};

export default UserModel;
