import Vue from 'vue'
import App from './App.vue'

import './assets/style/global.styl'

var app = new Vue({
  el: '#app',
  components: { App },
  render(h) {
    return h('App')
  },
})