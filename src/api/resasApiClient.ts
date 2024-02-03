import axios from 'axios'

const resasApiClient = axios.create({
  baseURL: process.env.RESAS_API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.RESAS_API_KEY
  }
})

export default resasApiClient
