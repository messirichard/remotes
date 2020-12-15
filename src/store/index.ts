import Vue from 'vue'
import Vuex from 'vuex'
import Login from './Login/index'
import Auth from './Auth/Auth'
import Signup from './Signup/Signup'
import VueCookie from 'vue-cookie'
import Profile from './Profile/Profile'
import Device from './Device/Device'

Vue.use(VueCookie)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Login,
    Signup,
    Auth,
    Profile,
    Device
  }
})