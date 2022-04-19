export const getUserInfo = {
    code: 200,
    data: {
        route: [{
            path: '/staff',
            name: 'Staff',
            component: 'Layout',
            redirect: '/staff',
            meta: { title: '员工管理', singleShowChildren: true, keepAlive: true },
            children: [{
                path: 'index',
                name: 'StaffIndex',
                meta: { title: '员工管理', icon: 'people' },
                component: 'staff/index',
            }]
        },
        {
            path: '/finance',
            name: 'Finance',
            component: 'Layout',
            redirect: '/finance/manage',
            meta: { title: '财务管理', icon: 'caiwu' },
            children: [{
                path: 'manage',
                name: 'FinancePay',
                meta: { title: '支付管理', },
                component: 'finance/pay',
            }, {
                path: 'recon',
                name: 'FinanceRecon',
                meta: { title: '对账单' },
                component: 'finance/recon',
            }]
        }],
        info: {
            id: 1,
            creatBy: 'admin',
            realName: '超级管理员',
            phone: '15637846796'
        }
    }
}
export const getSel = (params) => {
    let val = 0;
    if (params?.id) {
        val = params.id;
    }
    return {
        code: 200,
        data: {
            data: [
                {
                    value: '1',
                    label: val + '-1',
                },
                {
                    value: '2',
                    label: val + '-2',
                },
            ]
        }
    }
}