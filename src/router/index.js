import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
	{
		path: '/home',
		name: 'home',
		components: {
			body: resolve => {
				return require(['@/components/home.vue'], resolve)
			}
		}
	},
	{
		path: '/',
		redirect: '/home'
	},
]

const vueRouter = new VueRouter({
	mode:'history', //hash
	routes
})
export default vueRouter