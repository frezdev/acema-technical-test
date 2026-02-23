import axios from "axios"

export const API_BASE_URL = 'https://randomuser.me/api/0.8'

export const api = axios.create({
  baseURL: API_BASE_URL
})