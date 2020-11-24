import axios from 'axios'
export function request(config) {
  const inster=axios.create({
    baseURL:'http://123.207.32.32:8000/api/h8',
    timeout:5000
  })
  inster.interceptors.request.use(config=>{
    return config
  })
  inster.interceptors.response.use(res=>{
    // console.log(res.data)
    return res.data

  })
  return inster(config)

}
