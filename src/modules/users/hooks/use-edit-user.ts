import { useAppDispatch } from "../../../redux/hooks"
import type { EditUser } from "../interfaces/edit-user"
import { editUser } from "../slices/users.slice"

export const useEditUser = () => {
  const dispatch = useAppDispatch()
  const handleEditUser = (sha256: string, data: EditUser) => {
    dispatch(editUser({
      sha256,
      data: {
        name: {
          first: data.firstName,
          last: data.lastName,
          title: ""
        },
        email: data.email,
        phone: data.phone,
        location: {
          city: data.city,
          state: data.state,
          street: '',
          zip: 0
        }
      }
    }))
  }
  return {
    handleEditUser
  }
}
