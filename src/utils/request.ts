import { extend } from 'umi-request';

const request = extend({
    prefix: '/api',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default request;
