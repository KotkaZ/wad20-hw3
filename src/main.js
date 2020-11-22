import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from "./components/LoginPage";
import Browse from "./components/BrowsePage";
import Main from "./components/MainPage";
import axios from 'axios';
//import author from './models/Author';
//import post from './models/Post';
//import suggestion from './models/Suggestion';


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
        user: null,
        suggestions: [],
        posts: []
    },
    getters: {
        allPosts: state => state.posts,
        allSuggestions: state => state.suggestions,
        currentUser: state => state.user
    },
    actions: {
        async fetchPosts({ commit }) {
            const response = await axios.get("https://private-anon-a878d01bcd-wad20postit.apiary-mock.com/posts");
            commit('setPosts', response.data)
        },
        async fetchSuggestions({ commit }) {
            const response = await axios.get("https://private-anon-4dfe848681-wad20postit.apiary-mock.com/profiles");
            commit('setSuggestions', response.data)
        },
        async fetchUser({ commit }) {
            const response = await axios.get("https://private-anon-2f317f3893-wad20postit.apiary-mock.com/users/1");
            commit('setUser', response.data)
        }
    },
    mutations: {
        setPosts: (state, posts) => (state.posts = posts),
        setSuggestions: (state, suggestions) => (state.suggestions = suggestions),
        setUser: (state, user) => (state.user = user)
    },
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')