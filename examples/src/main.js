import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import PdSimpleUi from '@pd-simple-ui/components'
import { mockXHR } from '../../mock/index'
import { registerTableActive } from './components/TableActive'

// eslint-disable-next-line import/no-unresolved
import { registerRouter } from '@/router'

import 'element-plus/theme-chalk/index.css'
import App from '../App.vue'

const app = createApp(App)
registerRouter(app)
app.use(ElementPlus)

registerTableActive(PdSimpleUi.PdTable)
app.use(PdSimpleUi)

app.mount('#app')

mockXHR()
