import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Index from '../views/index'
import Login from '../views/Login'
import BasicContainer from '../components/BasicContainer'
import BasicLayout from '../components/BasicLayout'
import FormCheckBox from '../components/FormCheckBox'
import FormRadio from '../components/FormRadio'
import menu from '../config/menu-config'

// const children = []
const frameIn = []

menu.forEach( item => {
    item.sub.forEach( sub => {
        frameIn.push({
            name: sub.name,
            path: `/${sub.componentName}`,
            component: () => import(`../components/${sub.componentName}`)
        })
    })
})
const frameOut = [
    {
        name: '启动页面',
        path: '/',
        component: Login
    },
    {
        name: '登录页',
        path: '/login',
        component: Login
    },
]

// export const frameInRouter = frameIn

export default new Router({
    mode: 'history',
    routes: [
        ...frameIn,
        ...frameOut
    ]
})