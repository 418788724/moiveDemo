import { login } from '@/services/login'
import { Effect } from 'dva';
import { Reducer } from 'redux';

export interface LoginModeType {
    namespace: string;
    state: Object;
    effects: {
        login: Effect;
    };
    reducers: {
        changeLoginStatus: Reducer;
    }
}

const Model: LoginModeType = {
    namespace: 'login',

    state: {
        status: undefined,
    },

    effects: {
        *login({ payload }, { call, put }) {

        }
    },
    reducers: {
        changeLoginStatus(state, { payload }) {
            
        }
    }

}