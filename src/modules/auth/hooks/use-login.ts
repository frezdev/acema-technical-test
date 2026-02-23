import { useNavigate } from "react-router-dom"
import { useUsersContext } from "../../../contexts/users-context"
import { useAppDispatch } from "../../../redux/hooks"
import { login, logout } from "../slices/auth.slice"
import { toast } from "sonner"

export const useAuth = () => {
  const { users } = useUsersContext()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = ({ email, password }: { email: string, password: string }) => {
    const user = users.find(user => user.user.email === email && user.user.password === password)

    if (user) {
      localStorage.setItem('token', user.user.sha256)
      dispatch(login(user.user.sha256))

      navigate('/')
      return true
    }
    toast.error('Invalid email or password')
    return false
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logout())
    navigate('/login')
  }

  return { handleLogin, handleLogout }
}