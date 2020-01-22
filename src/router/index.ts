import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
	{
		path: '/home',
		name: 'home',
		components: {
			body: ()=> import(/* webpackChunkName: 'home' */"@/pages/home/index.vue")			 
		}
	},
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
	},
	{
		path: '/signin',
		name: 'signin',
		meta:true,
		components: {
			noNav:()=> import(/* webpackChunkName: 'signin' */"@/pages/signin/index.vue"),
		}
	},
	{
		path: '/',
		redirect: '/articles'
	},
]

const vueRouter = new VueRouter({
	mode:'history', //hash
	routes
} as any)
export default vueRouter