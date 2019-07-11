import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '../utils/auth'

//创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

//请求拦截器
service.interceptors.request.use(
    config => {
        //请求发送前做的处理
        if(store.getters.token) {
            //让每个请求都带上token，可根据实际情况修改'Token'
            config.headers['Token'] = getToken();
        }
        return config;
    },
    error => {
        //请求出错时做的处理
        console.log(error);
        return Promise.reject(error)
    }
)

//响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data.data;
        if(res.code !== 200) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5*1000
            })

            //508: 非法token；512：其他用户登录；514：token无效
            if(res.code === 508 || res.code === 512 || res.code === 514) {
                MessageBox.confirm('您已注销，可退出当前页面或重新登录', '确认注销', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })
                })
            }
            return Promise.reject(new Error(res.message) || 'Error')
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error);
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
)

export default service