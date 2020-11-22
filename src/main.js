import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from "./components/LoginPage";
import Browse from "./components/BrowsePage";
import Main from "./components/MainPage";
import Axios from 'axios';
import Author from './models/Author';


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

const store = new Vuex.Store({
    state: {
        user: new Author(),
        posts: [],
        suggestions: []
    },
    mutations: {

    },
    getters: {
        getUser: () => {
            return null;
        },
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')