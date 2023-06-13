import axios from 'axios'
const baseUrl = '_BASEURL_'

const axiosConfig = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  async serviceName() {
    try {
      return await axiosConfig.get()
    } catch (error) {
      throw new Error(error)
    }
  },
}
