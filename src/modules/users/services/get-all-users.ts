import { api } from "../../../constants/api"
import type { ApiResponse } from "../interfaces/users"

interface GetUsersParams {
  results: number
}
export const getAllUsers = async (params?: GetUsersParams) => {
  const res = await api.get<ApiResponse>('/', { params })

  return res.data
}