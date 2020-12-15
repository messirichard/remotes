import axios from 'axios'
import qs from 'qs'
import {
  Auths,
  HTTP,
  RevokeToken,
  GetData,
  GetToken,
  RefreshToken
} from '@/helpers/Config/Common'



export default {
  state: {
    token: GetToken()
  },
  mutations: {
    SET_TOKEN(state: any, value: string) {
      state.token = value
    }
  },
  getters: {},
  actions: {
    async retrieveToken(context: {commit: (arg0: string, arg1: string) => void}, credentials: {username: string;password: string}) {
      const requestBody = {
        client_id: Auths.clientID,
        client_secret: Auths.clientSecret,
        username: credentials.username,
        password: credentials.password,
        grant_type: Auths.grantType,
        scope: Auths.scopes
      }
      const responseData = await axios({
        method: 'POST',
        url: HTTP.baseURL + '/login/oauth/access_token',
        headers: HTTP.headers,
        data: qs.stringify(requestBody)
      }).then(response => {
        return response.data
      }).catch(error => {
        return error.response.data
      })

      if (responseData.access_token) {
        context.commit('SET_TOKEN', responseData.access_token)
        document.cookie = `access_token=${responseData.access_token}`
        document.cookie = `refresh_token=${responseData.refresh_token}`
        return {
          status: true,
          response: responseData
        }
      }
      return {
        status: false,
        response: responseData
      }
    },
    async revokeToken() {
      const token_cookie = document.cookie
      const split = token_cookie.split("refresh_token=")
      document.cookie = "refresh_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      const requestBody = {
        token: split[1]
      }
      const responseData = await axios({
        method: "POST",
        url: HTTP.baseURL + '/oauth/revoke',
        headers: RevokeToken.headers,
        data: qs.stringify(requestBody)
      }).then(response => {
        console.log(response.data)
        return response.data
      }).catch(error => {
        console.log(error.repsonse)
      })
      document.cookie = "access_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      return {
        status: true,
        response: responseData
      }
    },

    async requestForgotPassword(context: any, payload: {email: string}) {
      let status = false
      const responseData = await axios({
        method: 'POST',
        url: GetData.baseURL + '/forgot',
        headers: GetData.headers,
        data: qs.stringify(payload)
      }).then(response => {
        status = true
        return response.data
      }).catch(error => {
        return error.response.data
      })
      return {
        status,
        response: responseData
      }
    },

    async confirmResetPassword(context: any, payload: {email: string;code: string}) {
      let status = false
      console.log(payload)
      const responseData = await axios({
        method: 'GET',
        url: GetData.baseURL + '/reset',
        headers: GetData.headers,
        params: payload
      }).then(response => {
        status = true
        return response.data
      }).catch(error => {
        return error.response.data
      })
      return {
        status,
        response: responseData
      }
    },

    async resetPassword(context: any, payload: {email: string;password: string;rpassword: string;reset: string}) {
      let status = false
      console.log(payload)
      const responseData = await axios({
        method: 'POST',
        url: GetData.baseURL + '/reset',
        headers: GetData.headers,
        data: qs.stringify(payload)
      }).then(response => {
        status = true
        return response.data
      }).catch(error => {
        return error.response.data
      })
      return {
        status,
        response: responseData
      }
    },
    async REFRESH_TOKEN() {
      const responseData = await axios({
        method: 'POST',
        url: RefreshToken.baseURL + '/login/oauth/access_token',
        headers: RefreshToken.header,
        data: qs.stringify(RefreshToken.data)
      }).then(response => {
        document.cookie = `access_token=${response.data.access_token}`
        location.reload()
        return response
      }).catch(error => {
        // console.log(error.response)
        console.log('aa')
        document.cookie = "refresh_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "access_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        console.log('suks')
        location.reload()
        // return error.response
      })
    }
    // REFRESH_TOKEN: () => {
    //   return new Promise((resolve, reject) => {
    //   }
    // }
  }
}