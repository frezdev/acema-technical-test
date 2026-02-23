import { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../redux/hooks'
import { login } from '../slices/auth.slice'

export const AuthVerifyContainer = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
      return
    }
    dispatch(login(token))
    navigate('/')
  }, [navigate, dispatch])

  return (
    <>{children}</>
  )
}
