
const router = [
    {
        menuName: '主页',
        menuIco: 'home',
        component: '/home.js', // 主页
        path: '/home' // 主页
    },
    {
        menuName: '用户',
        menuIco: 'user',
        children: [
            {
                menuName: '用户列表',
                component: 'user.js', // 主页
                path: '/user/list' // 主页
            }
        ]
    },
    {
        menuName: '多级菜单',
        menuIco: 'setting',
        children: [
            {
                menuName: '多级菜单2',
                children: [
                    {
                        menuName: '菜单',
                        component: 'user/list.js', // 主页
                        path: '/admin/user/list3' // 主页
                    }
                ]
            }
        ]
    },
    {
        menuName: '关于我',
        menuIco: 'smile-o',
        component: 'about/about.js', // 主页
        path: '/admin/about' // 主页
    }
]

export default  router