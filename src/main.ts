import Vue from 'vue';
import App from './App.vue';
import router from './router'
import '@/components/css/reset.less';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);


new Vue({
    el:'#wrap',
    router,
    render: h => h(App),
})