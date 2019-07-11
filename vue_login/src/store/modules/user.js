import login from '../../api/user'
import { getToken, setToken, removeToken } from '../../utils/auth'
// import router from '@/router'

const state = {
    token: getToken(),
    username: '',
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USERNAME: (state, username) => {
        state.username = username
    }
}

const actions = {
    Login({ commit }, userInfo) {
        const { username, password } = userInfo;
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password}).then( res =>  {
                setToken(res.token);
                commit('SET_TOKEN', res.token)
                resolve();
            }).catch(error => {
                console.log(error)
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }