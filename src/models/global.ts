import { Subscription, Reducer, Effect } from 'umi';

export interface GlobalModelState {
  collapsed: boolean;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    defaultScroll: Effect;
  };
  reducers: {
    changeLayoutCollapsed: Reducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    collapsed: false,
  },

  effects: {
    defaultScroll() {
      const { document } = window;
      if (document) {
        if (document?.documentElement || document?.body) {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
        if (document.getElementsByClassName('antd-pro-layouts-basic-layout-layoutContent')?.[0]) {
          // 找你自己框架主体样式
          document.getElementsByClassName(
            'antd-pro-layouts-basic-layout-layoutContent',
          )[0].scrollTop = 0;
        }
      }
    },
  },

  reducers: {
    changeLayoutCollapsed(state = { collapsed: true }, { payload }): GlobalModelState {
      return {
        ...state,
        collapsed: payload,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }): void {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }): void => {
        if (pathname) {
          dispatch({
            type: `defaultScroll`,
          });
        }
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};

export default GlobalModel;
