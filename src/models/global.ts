import { Reducer } from 'redux'
import { Effect, Subscription } from 'dva'

export interface NoticeItem {
    id: string;
    type: string;
    status: string;
}

export interface GlobalModelState {
    sidebar: boolean;
    notices: NoticeItem[];
}

export interface GlobalModelType {
    namespace: 'global';
    state: GlobalModelState;
    effects: {
        fetchNotices: Effect;
        clearNotices: Effect;
    };
    reducers: {
        changeSideBar: Reducer<GlobalModelState>;
        saveNotices: Reducer<GlobalModelState>;
    };
    subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
    namespace: 'global',
    state: {
        sidebar: false,
        notices: []
    },
    effects: {
        *fetchNotices(_, { call, put, select }) {
        },
        *clearNotices({ payload }, { put, select }) {
        }
    },
    reducers: {
        changeSideBar(state = { sidebar: true, notices: []}, { payload }): GlobalModelState {
            return {
                ...state,
                sidebar: payload
            };
        },
        saveNotices(state, { payload }): GlobalModelState {
            return {
                ...state,
                sidebar: payload,
                notices: payload,
            }
        }
    },
    subscriptions: {
        setup({ history }): void {
            history.listen(({ pathname, search }): void => {
                // if (typeof window.ga)
            })
        }
    }
};

export default GlobalModel;
