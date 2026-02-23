import { useAppDispatch } from "../../../redux/hooks"
import { deleteUser } from "../slices/users.slice"

export const useDeleteUser = () => {
  const dispatch = useAppDispatch()

  const handleDeleteUser = (sha256: string) => {
    dispatch(deleteUser({ sha256 }))
  }
  return {
    handleDeleteUser
  }
}