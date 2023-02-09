import axios from "axios";
import qs from 'qs'
const serve = axios.create({
  baseURL:'/api'
})
// serve.interceptors.request.use((config)=>{
//   config.data = qs.stringify(config.data)
//   // console.log(config.data)
//   return config
// })
// axios.defaults.baseURL = 'http://124.221.191.225:7777/'
export default serve


