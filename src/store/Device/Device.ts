import axios from "axios";
import { GetAllData, URL} from '@/helpers/Config/Common'
import qs from 'qs'

export default {
  state: {
    device:{}
  },
  mutations: {
    SET_DEVICE(state: { device: any }, value: any) {
      state.device = value;
    },
  },
  getters: {
    getDevice: (state: any) => state.device
  },
  actions: {
    async getDataDevice(context: { commit: (arg0: string, arg1: string) => void }) {
      const responseData = await axios({
        method: 'GET',
        url: GetAllData.baseURL + '/devices', 
        headers: GetAllData.headers,
      }).then(response => {
        console.log(response.data)
        context.commit("SET_DEVICE", response.data)
        return response.data
      }).catch(error => {
        return error.response.data
      })
    }
  }
}