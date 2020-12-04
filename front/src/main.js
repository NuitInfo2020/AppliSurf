import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import home from './home.vue'
import Userform from './Userform.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: home},
  { path: '/Inscription', component: Userform}
]

const router = new VueRouter({
  routes // raccourci pour `routes: routes`
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(app),
}).$mount('#app')
