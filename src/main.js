import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyA723OaVVnygfXKOjG6iwjvLe27vdN8tCQ",
  authDomain: "chat-app-76f77.firebaseapp.com",
  databaseURL: "https://chat-app-76f77-default-rtdb.firebaseio.com/",
  projectId: "chat-app-76f77",
  storageBucket: "chat-app-76f77.appspot.com",
  messagingSenderId: "453179489797"
}
firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
