import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
  faEdit,
  faHome,
  faShoppingCart,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUser, faShoppingCart, faCheck, faTrash, faEdit)
Vue.prototype.$eventBus = new Vue()
Vue.component('f-icon', FontAwesomeIcon)
