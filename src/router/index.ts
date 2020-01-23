import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import base from './modules/base';
import common from './modules/common';
import user from './modules/user';

const routes = Array.prototype.concat(
	base,
	common,
	user
)

const vueRouter = new VueRouter({
	mode:'history', //hash
	routes
})

export default vueRouter












