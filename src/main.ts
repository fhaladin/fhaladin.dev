import './assets/style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import UiComponents from './plugins/ui-components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(UiComponents)
app.mount('#app')
