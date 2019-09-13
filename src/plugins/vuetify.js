import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import ru from 'vuetify/es5/locale/ru';

Vue.use(Vuetify, {
    theme: {
        primary: '#217a38',
        secondary: '#23a044',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#13d399',
        success: '#4CAF50',
        warning: '#FFC107'
    },
    iconfont: 'md',
    lang: {
        locales: { ru },
        current: 'ru'
    }
});
