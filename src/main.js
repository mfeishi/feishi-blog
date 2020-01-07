import Vue from 'vue';
import App from './App.vue';
// import router from './vuerouter/index.js'
import './components/css/global.css';

new Vue({
    el:'#wrap',
    // router,
    render: h => h(App),
})