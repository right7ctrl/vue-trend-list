import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store';
import router from './router';
import VueRouter from 'vue-router';

Vue.use(Vuex); 
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
