const routes = [
	{
		path: '/articles',
		name: 'articles',
		components: {
			body: ()=> import(/* webpackChunkName: 'articles' */"@/pages/articles/index.vue")			 
		}
	},
	{
		path: '/project',
		name: 'project',
		components: {
			body: ()=> import(/* webpackChunkName: 'project' */"@/pages/project/index.vue")			 
		}
	}
]

export default routes