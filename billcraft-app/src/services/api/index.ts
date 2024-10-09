import axios from 'axios'
import Customers from './customerService'
import { AxiosInstance } from 'axios'

const httpWrapper: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/v1',
  timeout: 10000
})

export default {
  Customers: new Customers(httpWrapper)
}