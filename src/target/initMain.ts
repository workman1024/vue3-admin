import './permission'
import request from '../utils/request'
import '../assets/css/index.scss'
import { fileComponent } from '../components/hnwf/index'
import { formComponent } from '../components/form/index'
const install = function(vue,app){
    fileComponent(app);
    formComponent(app);
    // options API
    app.config.globalProperties.$api = request;
    // Composition API
    app.provide('$api',request);
}
export default install;