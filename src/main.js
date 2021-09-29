import Vue from 'vue'
import App from './App.vue'

import formCreate from '@form-create/element-ui'
import FcDesigner from '@form-create/designer'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ELEMENT)
Vue.use(formCreate)
Vue.use(FcDesigner)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
