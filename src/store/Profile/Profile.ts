import axios from "axios";
import { GetAllData, URL} from '@/helpers/Config/Common'
import qs from 'qs'

export default {
  state: {
    profile: {},
    imageProfile:''
    // city: {},
    // activePerson: null
  },
  mutations: {
    SET_PROFILE(state: { profile: any }, value: any) {
      state.profile = value;
    },
    SET_IMAGE_PROFILE(state: { imageProfile: any }, value: any) {
      state.imageProfile = value;
    },
  },
  getters: {
    getProfile: (state: any) => state.profile
  },
  actions: {
    async getDataProfile(context: { commit: (arg0: string, arg1: string) => void }) { 
      const responseData = await axios({
        method: 'GET',
        url: GetAllData.baseURL + '/profile', 
        headers: GetAllData.headers,
      }).then(response => {
        if (response.data.user_avatar === null) {
          response.data.user_avatar = URL.FE + `/img/icons/dashadmin.jpg`
          context.commit("SET_IMAGE_PROFILE", response.data.user_avatar)
        }
        context.commit("SET_PROFILE", response.data)
        return response.data
      }).catch(error => {
        return error.response.data
      })
    },
    async updateData(context: { commit: (arg0: string, arg1: string) => void }, credentials: { user_fname: string; user_lname: string; user_title: string; user_phone: string; opassword: string; password: string; rpassword: string; cemail: string }) { 
      const requestBody = {
        fname: credentials.user_fname,
        lname: credentials.user_lname,
        title: credentials.user_title,
        phone: credentials.user_phone,
        opassword: credentials.opassword,
        password: credentials.password,
        rpassword: credentials.rpassword,
        cemail: credentials.cemail,
      }
      const responseData = await axios({
        method: 'PUT',
        url: GetAllData.baseURL + '/profile', 
        headers: GetAllData.headers,
        data: qs.stringify(requestBody)
      }).then(async response => {
        this.getDataProfile
        return response
      }).catch(error => {
        return error.response
      })
      // console.log(responseData)
      
      if (responseData.status === 200) {
        return {
          status: true,
          response: responseData
        }
      }
      else {
        return {
          status: false,
          response: responseData
        }
      }
    },
    async updateOrga(context: { commit: (arg0: string, arg1: string) => void }, credentials: { org_name: string; org_addr1: string; org_addr2: string; org_city: string; org_province: string; org_country: string; org_zip: string; org_web: string; org_email: string; org_phone: string }) { 
      const requestBody = {
        org_name: credentials.org_name,
        org_addr1: credentials.org_addr1,
        org_addr2: credentials.org_addr2,
        org_city: credentials.org_city,
        org_province: credentials.org_province,
        org_country: credentials.org_country,
        org_zip: credentials.org_zip,
        org_web: credentials.org_web,
        org_email: credentials.org_email,
        org_phone: credentials.org_phone,
      }
      const responseData = await axios({
        method: 'PUT',
        url: GetAllData.baseURL + '/organization', 
        headers: GetAllData.headers,
        data: qs.stringify(requestBody)
      }).then(async response => {
        return response
      }).catch(error => {
        return error.response
      })
      // console.log(responseData.status)
      if (responseData.status === 200) {
        this.getDataProfile
        return {
          status: true,
          response: responseData
        }
      }
      else {
        return {
          status: false,
          response: responseData
        }
      }
    },
  }
}