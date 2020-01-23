import Vue from 'vue';
import App from './App.vue';
import router from './router'
import '../assets/css/reset.less';
import '../assets/css/global.less';
import '@/utils/rem';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

MuseUI.theme.add('my-theme', {
  primary: "lightsteelblue",
  success: '#4caf50',
  warning: '#ffeb3b',
}, 'light').use('my-theme')

Vue.use(MuseUI);
new Vue({
    el:'#wrap',
    router,
    render: h => h(App),
})