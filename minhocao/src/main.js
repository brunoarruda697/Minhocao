import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
  theme: {
    primary: '#f58b54',
    secondary: '#66BB6A',
    error: '#FF3D00',
    success: '#4CAF50',
  },
  iconfont: 'md',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
