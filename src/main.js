import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store";

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

var config = {
  apiKey: "AIzaSyBxgZFos2KqPI7F0R7PpJfzgtXrPeycrZw",
  authDomain: "vue-blog-4157b.firebaseapp.com",
  databaseURL: "https://vue-blog-4157b-default-rtdb.firebaseio.com/",
  projectId: "vue-blog-4157b",
  storageBucket: "vue-blog-4157b.appspot.com",
  messagingSenderId: "1002580833406"
}
firebase.initializeApp(config)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
