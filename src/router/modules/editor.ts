const routes = [{
		path: '/editor',
		name: 'editor',
		meta:true,
		component: ()=> import(/* webpackChunkName: 'editor' */"@/pages/editor/index.vue"),
		children:[{
			path: 'create', //写文章
			name: 'create',
			meta:true,
			component: ()=> import(/* webpackChunkName: 'editor-create' */"@/pages/editor/index.vue")
		}]
	}]