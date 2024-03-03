import axios from 'axios'

const apiLopesBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

apiLopesBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('lopesburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiLopesBurger
