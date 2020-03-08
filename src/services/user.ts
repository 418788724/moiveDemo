import request from '@/utils/request';

export async function userInfo() {
    return request('/user/userConter', {
        method: 'GET'
    });
}
