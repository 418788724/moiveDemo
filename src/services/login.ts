import request from '@/utils/request';

export interface LoginParamsType {
    email: string;
    password: string;
}

export async function login(data: LoginParamsType) {
    return request('/user/login', {
        method: 'POST',
        data
    });
}
