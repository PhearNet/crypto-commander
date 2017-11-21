'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';

import VuePouch from 'vue-pouch';

import PouchDB from 'pouchdb'
import PouchFind from'pouchdb-find';
import PouchLiveFind from'pouchdb-live-find';

import App from './App.vue';
import Hello from './components/testing/Hello.vue';
import CoinList from './components/CoinSearch.vue';
import 'vue-material/dist/vue-material.min.css';

PouchDB.plugin(PouchFind);
PouchDB.plugin(PouchLiveFind);
Vue.use(VueRouter);
Vue.use(VueMaterial);
// Vue.use(VuePouchDB);
Vue.use(VuePouch, {pouch: PouchDB});

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{ path: '/dashboard', component: Hello },
        { path: '/coins', component: CoinList },]
});
new Vue({
    router,
    el: '#app',
    render: h => h(App)
});

