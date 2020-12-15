import Vue from 'vue'
import VueRouter, {
  RouteConfig
} from 'vue-router'
// import Login from '@/pages/Login/Login.vue'
// import Dashboard from "@/pages/Dashboard/Dashboard.vue";
// import Main from "@/pages/Dashboard/Main/Main.vue";
// import Api from "@/pages/Dashboard/Api/Api.vue";
// import Device from "@/pages/Dashboard/Device/Device.vue";
// import Subcription from "@/pages/Dashboard/Subcription/Subcription.vue";
// import SendEmailForgotPassSuccess from "@/pages/ForgotPassword/SendEmailForgotPassSuccess.vue"
// import Users from "@/pages/Dashboard/Users/Users.vue";
// import WidgetCollection from "@/pages/Dashboard/Widget/WidgetCollect/WidgetCollect.vue";
// import WidgetDefault from "@/pages/Dashboard/Widget/WidgetDefault/WidgetDefault.vue";
// import Profile from "@/pages/Dashboard/Profile/Profile.vue";
// import Config from "@/pages/Dashboard/Config/Config.vue";
// import ConfirmSignup from '@/pages/ConfirmSignup/Verification.vue';
// import ConfirmSignupSuccess from '@/pages/ConfirmSignup/SignUpSuccess.vue';
// import Signups from '@/pages/ConfirmSignup/BeforeSignup.vue';
// import ResetPassword from '@/pages/ResetPassword/ResetPassword.vue';
// import ResetPasswordSuccess from '@/pages/ResetPassword/ResetPasswordSuccess.vue';
// import Signup from '@/pages/Signup/Signup.vue'
// import ForgotPassword from '@/pages/ForgotPassword/ForgotPassword.vue'
import {
  GetToken
} from '@/helpers/Config/Common'
import axios from 'axios'
import store from '@/store';

Vue.use(VueRouter)

const routes: Array < RouteConfig > = [{
  
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ '@/pages/Login/Login.vue'),
    
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import(/* webpackChunkName: "Signup" */ '@/pages/Signup/Signup.vue'),
  },
  {
    path: "/signups",
    name: "signups",
    component: () => import(/* webpackChunkName: "Signups" */ '@/pages/ConfirmSignup/BeforeSignup.vue'),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import(/* webpackChunkName: "ForgotPassword" */ '@/pages/ForgotPassword/ForgotPassword.vue'),

  },
  {
    path: "/confirm-signup",
    name: "confirm-signup",
    component: () => import(/* webpackChunkName: "ConfirmSignup" */ '@/pages/ConfirmSignup/Verification.vue'),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import(/* webpackChunkName: "ResetPassword" */ '@/pages/ResetPassword/ResetPassword.vue'),
  },
  {
    path: "/reset-password-success",
    name: "reset-password-success",
    component: () => import(/* webpackChunkName: "ResetPasswordSuccess" */ '@/pages/ResetPassword/ResetPasswordSuccess.vue'),

  },
  {
    path: "/confirm-signup-success",
    name: "confirm-signup-success",
    component: () => import(/* webpackChunkName: "ConfirmSignupSuccess" */ '@/pages/ConfirmSignup/SignUpSuccess.vue'),

  },
  {
    path: "/sendemail-forgotPass-success",
    name: "sendemail-forgotPass-success",
    component: () => import(/* webpackChunkName: "SendEmailForgotPassSuccess" */ '@/pages/ForgotPassword/SendEmailForgotPassSuccess.vue'),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/pages/Dashboard/Dashboard.vue'),
    meta: {
      auth: true,
    },
    children: [{
        path: "main",
        name: "Main",
        component: () => import(/* webpackChunkName: "Main" */ '@/pages/Dashboard/Main/Main.vue'),
      },
      {
        path: 'api',
        name: 'Api',
        component: () => import(/* webpackChunkName: "Api" */ '@/pages/Dashboard/Api/Api.vue'),
      },
      {
        path: 'device',
        name: 'Device',
        component: () => import(/* webpackChunkName: "Device" */ '@/pages/Dashboard/Device/Device.vue'),
      },
      {
        path: 'widgetdefault',
        name: 'Widget Default',
        component: () => import(/* webpackChunkName: "WidgetDefault" */ '@/pages/Dashboard/Widget/WidgetDefault/WidgetDefault.vue'),
      },
      {
        path: 'widgetcollect',
        name: 'Widget Collection',
        component: () => import(/* webpackChunkName: "WidgetCollect" */ '@/pages/Dashboard/Widget/WidgetCollect/WidgetCollect.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "Users" */ '@/pages/Dashboard/Users/Users.vue'),
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import(/* webpackChunkName: "Profile" */ '@/pages/Dashboard/Profile/Profile.vue'),
      },
      {
        path: 'subcription',
        name: 'Subcription',
        component: () => import(/* webpackChunkName: "Subcription" */ '@/pages/Dashboard/Subcription/Subcription.vue'),
      },
      {
        path: 'config',
        name: 'Config',
        component: () => import(/* webpackChunkName: "Config" */ '@/pages/Dashboard/Config/Config.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  
scrollBehavior (to, from, savedPosition) {
    let position = { x: 0, y: 0 }
    // Keep scroll position when using browser buttons
    if (savedPosition) {
      position = savedPosition
    }

    // Workaround for transitions scrolling to the top of the page
    // However, there are still some problems being fixed by the vue team
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position)
      }, 1000)
    })
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (GetToken() === null) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});


axios.interceptors.request.use(
  config => {
    const token = GetToken();
    if (token) {
      // config.headers['Authorization'] = 'Bearer ' + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error)
  });



//Add a response interceptor

axios.interceptors.response.use((response) => {
  return response
}, function (error) {
  const originalRequest = error.config;

  //    if (error.response.status === 401 && originalRequest.url === 
  // 'http://13.232.130.60:8081/v1/auth/token) {
  //        router.push('/login');
  //        return Promise.reject(error);
  //    }

  if (error.response.status === 401 && !originalRequest._retry) {

    originalRequest._retry = true;
    const cek = store.dispatch('REFRESH_TOKEN')
    if (error.response.status === 400) {
      router.push({
            name: 'Login'
        });
    }
    // console.log(cek.status)
    // if (cek) {
    //   // console.log(cek.status)
    //   router.push('/')
    // }
    }
    
  return Promise.reject(error);
});

// router.scrollBehavior(to, from, savedPosition) {
//   if (savedPosition) {
//     return savedPosition
//   }
//   if (to.hash) {
//     return {selector:to.hash}
//   }
//   return {x:0, y:0}
// }

export default router