import { Reducer } from 'redux';
import { Effect, Subscription } from 'dva';

export interface GlobalModelState {
  sideBar: boolean;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {};
  reducers: {
    changeSideBar: Reducer<GlobalModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    sideBar: false,
  },
  effects: {},
  reducers: {
    changeSideBar(state, { payload }): GlobalModelState {
      return {
        ...state,
        sideBar: payload,
      };
    },
  },
  subscriptions: {
    setup({ history }): void {
      history.listen(({ pathname, search }): void => {
        console.log(pathname, search);
      });
    },
  },
};

export default GlobalModel;
