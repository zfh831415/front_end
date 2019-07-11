module.exports = [
    {
        name: '用户管理',
        id: 'user',
        sub: [
            {
                name: 'Layout 布局',
                componentName: 'BasicLayout'
            },
            {
                name: 'Container 布局容器',
                componentName: 'BasicContainer'
            }
        ]
    },
    {
        name: '文章管理',
        id: 'article',
        sub: [
            {
                name: '复选框',
                componentName: 'FormCheckBox'
            },
            {
                name: '单选框',
                componentName: 'FormRadio'
            }
        ]
    }
]