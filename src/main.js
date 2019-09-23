import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileImport, faFileExport, faStickyNote, faPlusCircle, faTimesCircle, faArrowRight, faUndoAlt, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileImport)
library.add(faFileExport)
library.add(faStickyNote)
library.add(faPlusCircle)
library.add(faTimesCircle)
library.add(faArrowRight)
library.add(faUndoAlt)
library.add(faRedoAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')