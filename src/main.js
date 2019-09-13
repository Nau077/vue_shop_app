import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import store from './store';
import App from './App.vue';
import router from './router/index';
import Vuetify from 'vuetify';
import * as fb from 'firebase';
import './stylus/main.styl';
import BuyModalComponent from '@/components/Shared/BuyModal';

Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.component('app-buy-modal', BuyModalComponent);
new Vue({
    router,
    store,
    created () {
        fb.initializeApp({
            apiKey: 'AIzaSyDJxf4ONxjA4iAg0WWf4fAhMpGEBCSp57Q',
            authDomain: 'pr-it-project.firebaseapp.com',
            databaseURL: 'https://pr-it-project.firebaseio.com',
            projectId: 'pr-it-project',
            storageBucket: 'pr-it-project.appspot.com',
            messagingSenderId: '1089599051463'
        });

        // fb.auth().onAuthStateChanged(user => {
        //     if (user) {
        //       this.$store.dispatch('autoLoginUser', user)
        //     }
        //   });

        this.$store.dispatch('fetchAds');
    },
    render: h => h(App)
}).$mount('#app');
