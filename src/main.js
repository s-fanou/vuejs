/* For Webpack this main.js is the entry point of our application

we import the Vue library */
import Vue from 'vue'
/* I believe we import the whole App.vue file */
import App from './App.vue'

/* this is the code for our main Vue root object */
new Vue({
  el: '#app',
  render: h => h(App)
})
