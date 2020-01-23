const routes = [
	{
		path: '/',
		redirect: '/articles'
	},
	{
		path: '/home',
		name: 'home',
		components: {
			body: ()=> import(/* webpackChunkName: 'home' */"@/pages/home/index.vue")			 
		}
	}
]
export default routes