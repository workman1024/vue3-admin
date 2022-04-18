import { createApp } from 'vue'
import App from "./App.vue";
import store from './store';
import route from './route';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'virtual:svg-icons-register';
import initMain from './target/initMain';

const app = createApp(App)
app.use(initMain,app).use(ElementPlus,{ locale }).use(route).use(store).mount('#app')
