
import axios from "axios";
import qs from 'qs'
import {GetData} from '@/helpers/Config/Common'

export default {
  state: {},
  mutations: {},
  actions: {
    async Register(context: { commit: (arg0: string, arg1: string) => void }, credentials: {name: string; email: string; password: string}) {
      console.log(credentials.email)
      const requestBody = {
        fullname : credentials.name,
        email : credentials.email,
        password: credentials.password,
        agree: true
      }

      let status = false
      const responseData = await axios({
        method: 'POST',
        url: GetData.baseURL + '/signup',
        headers: GetData.headers,
        data: qs.stringify(requestBody)
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
    async confirmSignup(context: any, payload: {email: string; code: string}) {
      let status = false
      const responseData = await axios({
        method: 'PUT',
        url: GetData.baseURL + '/signup',
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
    }
  }
}