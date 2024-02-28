import axios from 'axios'

const apiLopesBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiLopesBurger
