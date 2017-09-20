import App from './app.vue';
import routerConfig from './router';
import axios from 'axios';
import 'Style/scss/index.scss';

Vue.prototype.$http = axios;
Vue.use(VueRouter);

var router = new VueRouter(routerConfig);
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
