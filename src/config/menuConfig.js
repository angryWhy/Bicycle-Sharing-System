const routes = [
    {
        title: '首页',
        link: '/home'
    },
    {
        title: 'UI',
        link: '/ui',
        children: [
            {
                title: '按钮',
                link: '/ui/buttons',
            },
            {
                title: '弹框',
                link: '/ui/modals',
            },
            {
                title: 'Loading',
                link: '/ui/loadings',
            },
            {
                title: '通知提醒',
                link: '/ui/notification',
            },
            {
                title: '全局Message',
                link: '/ui/messages',
            },
            {
                title: 'Tab页签',
                link: '/ui/tabs',
            },
            {
                title: '图片画廊',
                link: '/ui/gallery',
            },
            {
                title: '轮播图',
                link: '/ui/carousel',
            }
        ]
    },
    {
        title: '表单',
        link: '/form',
        children: [
            {
                title: '登录',
                link: '/form/login',
            },
            {
                title: '注册',
                link: '/form/reg',
            }
        ]
    },
    {
        title: '表格',
        link: '/table',
        children: [
            {
                title: '基础表格',
                link: '/table/basic',
            },
            {
                title: '高级表格',
                link: '/table/high',
            }
        ]
    },
    {
        title: '富文本',
        link: '/rich'
    },
    {
        title: '城市管理',
        link: '/city'
    },
    {
        title: '订单管理',
        link: '/order',
        btnList: [
            {
                title: '订单详情',
                link: 'detail'
            },
            {
                title: '结束订单',
                link: 'finish'
            }
        ]
    },
    {
        title: '员工管理',
        link: '/user'
    },
    {
        title: '车辆地图',
        link: '/bikeMap'
    },
    {
        title: '图标',
        link: '/charts',
        children: [
            {
                title: '柱形图',
                link: '/charts/bar'
            },
            {
                title: '饼图',
                link: '/charts/pie'
            },
            {
                title: '折线图',
                link: '/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        link: '/permission'
    },
];
export default routes;