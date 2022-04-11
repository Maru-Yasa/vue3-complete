import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import router from './router'
import store from './store'

import VueSidebarMenu from 'vue-sidebar-menu'
import BootStrapIcon from '@dvuckovic/vue3-bootstrap-icons';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


let Vue = createApp(App)
Vue.component('Bi', BootStrapIcon)
Vue.use(store)
Vue.use(BootstrapVue3)
Vue.use(VueSidebarMenu)
Vue.use(router)
Vue.mount('#app')
