const routes = [
	{
		path: '/user',
		name: 'user',
		meta:true,
		components: {
			noNav:()=> import(/* webpackChunkName: 'user' */"@/pages/user/index.vue"),
		}
	},
]
export default routes