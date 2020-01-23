const routes = [
	{
		path: '/user',
		name: 'user',
		meta:true,
		components: {
			noNav:()=> import(/* webpackChunkName: 'user' */"@/pages/user/index.vue"),
		},
		children:[{
			path: 'login', //登录
			name: 'login',
			meta:true,
			component: ()=> import(/* webpackChunkName: 'login' */"@/pages/user/login/index.vue")
		},{
			path: 'register', //注册
			name: 'register',
			meta:true,
			component: ()=> import(/* webpackChunkName: 'register' */"@/pages/user/register/index.vue")
		}]
	},
]
export default routes