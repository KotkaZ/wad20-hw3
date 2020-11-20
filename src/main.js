import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from "./components/Login";
import Browse from "./components/Browse";
import Main from "./components/Main";
import Axios from 'axios';


Vue.prototype.$http = Axios
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    { path: '/', component: Login },
    { path: '/browse', component: Browse },
    { path: '/main', component: Main },
];

const router = new VueRouter({ routes });


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')