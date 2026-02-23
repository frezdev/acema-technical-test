
import './App.css'
import { UsersProvider } from './contexts/users-context'
import { AuthVerifyContainer } from './modules/auth/containers/AuthVerifyContainer'
import { AppRouter } from './router/intex'

function App() {
  return (
    <UsersProvider>
      <AuthVerifyContainer>
        <AppRouter />
      </AuthVerifyContainer>
    </UsersProvider>
  )
}

export default App
