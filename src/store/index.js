import { createStore } from 'vuex'
import user from './modules/user';
import permission from './modules/permission';
import app from './modules/app';
import getters from './getters';

const store = createStore({
  modules:{
    user,
    permission,
    app
  },
  getters
})
export default store;