const routes = [{
		path: '/editor',
		name: 'editor',
		meta:true,
		components:{
			noNav:()=> import(/* webpackChunkName: 'editor' */"@/pages/editor/index.vue")
		},
		children:[{
			path: 'create', //写文章
			name: 'create',
			meta:true,
			component: ()=> import(/* webpackChunkName: 'editor-create' */"@/pages/editor/create/index.vue")
		}]
	}]
	
	export default routes