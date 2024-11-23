import { createApp } from 'vue'
import App from './app/ui/App.vue'
import router from './app/router'
import Antd from 'ant-design-vue';

import './shared/styles/main.css'

const app = createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')
