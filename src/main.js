/* For Webpack this main.js is the entry point of our application
  
we import the Vue library */
import Vue from 'vue'
/* I believe we import the whole App.vue file */
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
