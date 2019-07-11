import request from '../utils/request'

export default function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data: data
    })
}